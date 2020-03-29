import { highlightActivity, showActivityDetails, showActivityMarker } from '../../store/actions'
import { connect } from 'react-redux'
import moment from 'moment'
import React from 'react'
import { ReduxActivity } from '../../interfaces/store/reducers'

const pad = (num, size) => {
  const s = '000000000' + num
  return s.substr(s.length - size)
}

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
  const { activity, highlightActivity, showActivityDetails, showActivityMarker } = props
  const onToggleClick = () => {
    !activity.showDetails && highlightActivity({ id: activity.id })
    showActivityDetails({ id: activity.id, show: !activity.showDetails })
    showActivityMarker({ id: activity.id, show: !activity.showDetails })
  }
  return (
    <div className="f5 db pa3">
      <a className="link dim gray" onClick={onToggleClick}>
        <span className="f6 grow br-pill dn ph2 pv2 mr1 dib-l black bg-light-gray">
          {moment(activity.startDate).format('MMM DD YYYY')}
        </span>
        <p className="truncate w-60-l w-100 ma0 dib v-mid">{activity.name}</p>
        <span className="f6 grow br-pill ph2 pv2 dib-l dn white bg-black fr">
          {pad((activity.distance / 1000).toFixed(2), 5)}km
        </span>
      </a>
      <div
        className={`${activity.showDetails ? 'mh-500' : 'mh-0'} h-auto overflow-hidden`}
        style={{
          transition: 'max-height 0.3s ease-in-out',
        }}
      >
        {activity?.time?.elapsed ? <p>Time: {activity.time.elapsed}s</p> : null}
        {activity?.elevation?.gain ? <p>Elevation: {activity.elevation.gain}m</p> : null}
        {activity?.type ? <p>Type: {activity.type}</p> : null}
        {activity?.kudos ? <p>Kudos: {activity.kudos}</p> : null}
        {activity?.speed?.average ? <p>Average Speed: {activity.speed.average} m/s</p> : null}
        {activity?.heartrate?.average ? (
          <p>Average Heartrate: {activity.heartrate.average} bpm</p>
        ) : null}
        {activity?.prs ? <p>PRs: {activity.prs}</p> : null}
        {activity?.achievements ? <p>Achievements: {activity.achievements}</p> : null}
      </div>
    </div>
  )
}
export default connector(ActivityEntry)
