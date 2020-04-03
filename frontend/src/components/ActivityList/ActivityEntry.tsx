import { highlightActivity, showActivityDetails, showActivityMarker } from '../../store/actions'
import { connect } from 'react-redux'
import { leftZeroPadding } from '../../utils'
import React from 'react'
import { ReduxActivity } from '../../interfaces/store/reducers'

const mapDispatchToProps = {
  highlightActivity,
  showActivityDetails,
  showActivityMarker,
}

const connector = connect(null, mapDispatchToProps)

type ActivityEntryProps = {
  activity: ReduxActivity
  highlightActivity: typeof highlightActivity
  showActivityMarker: typeof showActivityMarker
  showActivityDetails: typeof showActivityDetails
}

const ActivityEntry = (props: ActivityEntryProps) => {
  const {
    activity: {
      id,
      showDetails,
      startDate,
      name,
      distance,
      time,
      elevation,
      type,
      kudos,
      speed,
      heartrate,
      prs,
      achievements,
    },
    highlightActivity,
    showActivityDetails,
    showActivityMarker,
  } = props
  const onToggleClick = () => {
    !showDetails && highlightActivity({ id })
    showActivityDetails({ id, show: !showDetails })
    showActivityMarker({ id, show: !showDetails })
  }
  return (
    <div className="f5 db pa3">
      <a className="link dim gray" onClick={onToggleClick}>
        <span className="f6 grow br-pill dn ph2 pv2 mr1 dib-l black bg-light-gray">
          {startDate}
        </span>
        <p className="truncate w-60-l w-100 ma0 dib v-mid">{name}</p>
        <span className="f6 grow br-pill ph2 pv2 dib-l dn white bg-black fr">
          {leftZeroPadding(distance.toFixed(2), 5)}km
        </span>
      </a>
      <div className={`${showDetails ? 'mh-500' : 'mh-0'} h-auto overflow-hidden t-max-height`}>
        {time?.elapsed ? <p>Time: {time.elapsed}</p> : null}
        {elevation?.gain ? <p>Elevation: {elevation.gain}m</p> : null}
        {type ? <p>Type: {type}</p> : null}
        {kudos ? <p>Kudos: {kudos}</p> : null}
        {speed?.average ? (
          <p>Average Speed: {leftZeroPadding(speed.average.toFixed(2), 5)} km/h</p>
        ) : null}
        {heartrate?.average ? <p>Average Heartrate: {heartrate.average} bpm</p> : null}
        {prs ? <p>PRs: {prs}</p> : null}
        {achievements ? <p>Achievements: {achievements}</p> : null}
      </div>
    </div>
  )
}
export default connector(ActivityEntry)
