import { ActivitiesActions, MapActions } from 'store/actions'
import { connect, ConnectedProps } from 'react-redux'
import React, { FC, useEffect, useRef } from 'react'
import { highlightActivity } from 'store/actions/thunks'
import { leftZeroPadding } from 'utils'
import { ParsedStravaProfile } from '@tokks/strava'
import { ReduxActivity } from 'interfaces/store/reducers'

const mapDispatchToProps = {
  highlightActivity,
  showActivityDetails: ActivitiesActions.showActivityDetails,
  showActivityMarker: ActivitiesActions.showActivityMarker,
  initMap: MapActions.initMap,
}

const connector = connect(null, mapDispatchToProps)

type ActivityEntryProps = ConnectedProps<typeof connector> & {
  activity: ReduxActivity
  profile: ParsedStravaProfile
}

const ActivityDetails = ({
  activity: { time, elevation, type, kudos, speed, heartrate, prs, achievements, pace },
}) => {
  const lines = [
    time?.elapsed && ['Time', time.elapsed],
    elevation?.gain && ['Elevation', `${elevation.gain}m`],
    type && ['Type', type],
    kudos && ['Kudos', kudos],
    pace?.average && type === 'Run' && ['Average Pace', `${pace.average} / km`],
    speed?.average &&
      type === 'Ride' && ['Average Speed', `${leftZeroPadding(speed.average.toFixed(2), 5)} km/h`],
    heartrate?.average && ['Average Heartrate', `${heartrate.average} bpm`],
    prs && ['PRs', prs],
    achievements && ['Achievements', achievements],
  ].filter(Boolean)
  return (
    <table className="f6 w-100 mw6 center pv2" cellSpacing="0">
      <tbody className="lh-copy">
        {lines.map(([name, value]) => (
          <tr className="stripe-dark" key={name}>
            <td className="pa2">{name}</td>
            <td className="pa2">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const ActivityEntry: FC<ActivityEntryProps> = props => {
  const {
    activity,
    activity: { id, showDetails, startDate, name, distance, highlightSidelist, startPosition },
    highlightActivity,
    showActivityDetails,
    showActivityMarker,
    initMap,
    profile,
  } = props
  const el = useRef<HTMLDivElement>(null)
  useEffect(() => {
    highlightSidelist && el.current.scrollIntoView()
  }, [highlightSidelist])

  const onToggleClick = () => {
    !showDetails && highlightActivity({ id })
    showActivityDetails({ id, show: !showDetails })
    showActivityMarker({ id, show: !showDetails })
  }

  const onFocusClick = () => {
    initMap({ defaultCenter: startPosition })
    highlightActivity({ id })
    showActivityMarker({ id, show: true })
  }

  return (
    <div
      className={`f5 db pa3 t-cb ${highlightSidelist && 'bg-light-green'}`}
      ref={el}
      title={profile?.name}
    >
      <div className="link dim gray" onClick={onToggleClick}>
        {startDate ? (
          <span className="f6 grow br-pill dn ph2 pv2 mr1 dib-l black bg-light-gray">
            {startDate}
          </span>
        ) : null}
        <span className="w-60-l w-100">
          <img
            alt={profile?.name}
            src={`https://res.cloudinary.com/marcelotokarnia/image/fetch/w_32,h_32,c_fill,g_face,r_max,f_auto/${profile?.picture}`}
          />
          <p className="truncate ma0 dib v-mid">{name}</p>
        </span>

        <span className="f6 grow br-pill ph2 pv2 dib-l dn white bg-black fr">
          {leftZeroPadding(distance.toFixed(2), 5)}km
        </span>
      </div>
      <div className={`${showDetails ? 'mh-500' : 'mh-0'} h-auto overflow-hidden t-max-height `}>
        <ActivityDetails activity={activity} />
        <div>
          {startPosition && (
            <button className="br3 bg-light-gray pointer" onClick={onFocusClick}>
              Focus on map
            </button>
          )}
          {id && (
            <button className="br3 bg-light-gray pointer">
              <a href={`https://www.strava.com/activities/${id}`} target="_blank" rel="noreferrer">
                Show Activity Details
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
export default connector(ActivityEntry)
