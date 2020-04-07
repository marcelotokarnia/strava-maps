import {
  highlightActivity,
  initMap,
  showActivityDetails,
  showActivityMarker,
} from '../../store/actions'
import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { leftZeroPadding } from '../../utils'
import { ReduxActivity } from '../../interfaces/store/reducers'

const mapDispatchToProps = {
  highlightActivity,
  showActivityDetails,
  showActivityMarker,
  initMap,
}

const connector = connect(null, mapDispatchToProps)

type ActivityEntryProps = {
  activity: ReduxActivity
  highlightActivity: typeof highlightActivity
  showActivityMarker: typeof showActivityMarker
  showActivityDetails: typeof showActivityDetails
  initMap: typeof initMap
}

const ActivityDetails = ({
  activity: { time, elevation, type, kudos, speed, heartrate, prs, achievements },
}) => {
  const lines = [
    time?.elapsed && ['Time', time.elapsed],
    elevation?.gain && ['Elevation', `${elevation.gain}m`],
    type && ['Type', type],
    kudos && ['Kudos', kudos],
    speed?.average && ['Average Speed', `${leftZeroPadding(speed.average.toFixed(2), 5)} km/h`],
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

const ActivityEntry = (props: ActivityEntryProps) => {
  const {
    activity,
    activity: { id, showDetails, startDate, name, distance, highlightSidelist, startPosition },
    highlightActivity,
    showActivityDetails,
    showActivityMarker,
    initMap,
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
    <div className={`f5 db pa3 t-cb ${highlightSidelist && 'bg-light-green'}`} ref={el}>
      <div className="link dim gray" onClick={onToggleClick}>
        <span className="f6 grow br-pill dn ph2 pv2 mr1 dib-l black bg-light-gray">
          {startDate}
        </span>
        <p className="truncate w-60-l w-100 ma0 dib v-mid">{name}</p>
        <span className="f6 grow br-pill ph2 pv2 dib-l dn white bg-black fr">
          {leftZeroPadding(distance.toFixed(2), 5)}km
        </span>
      </div>
      <div className={`${showDetails ? 'mh-500' : 'mh-0'} h-auto overflow-hidden t-max-height `}>
        <ActivityDetails activity={activity} />
        <div>
          <button onClick={onFocusClick}>Focus on map</button>
        </div>
      </div>
    </div>
  )
}
export default connector(ActivityEntry)
