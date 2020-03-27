import { compose, withStateHandlers } from 'recompose'
import moment from 'moment'
import React from 'react'

const pad = (num, size) => {
  const s = '000000000' + num
  return s.substr(s.length - size)
}

export default compose(
  withStateHandlers(
    () => ({
      isOpen: false,
    }),
    {
      toggleCollapse: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      }),
    }
  )
)(({ activity, isOpen, toggleCollapse }) => (
  <div className="f5 db pa3">
    <a className="link dim gray" onClick={toggleCollapse}>
      <span className="f6 grow br-pill dn ph2 pv2 mr1 dib-l black bg-light-gray">
        {moment(activity.startDate).format('MMM DD YYYY')}
      </span>
      <p className="truncate w-60-l w-100 ma0 dib v-mid">{activity.name}</p>
      <span className="f6 grow br-pill ph2 pv2 dib-l dn white bg-black fr">
        {pad((activity.distance / 1000).toFixed(2), 5)}km
      </span>
    </a>
    <div
      className={`${isOpen ? 'mh-500' : 'mh-0'} h-auto overflow-hidden`}
      style={{
        transition: 'max-height 0.3s ease-in-out',
      }}
    >
      {activity?.time?.elapsed ? <p>Time: {activity.time.elapsed}s</p> : null}
      {activity?.elevation?.gain ? <p>Elevation: {activity.elevation.gain}m</p> : null}
      {activity?.type ? <p>Type: {activity.type}</p> : null}
      {activity?.kudos ? <p>Kudos: {activity.kudos}</p> : null}
      {activity?.speed?.average ? <p>Average Speed: {activity.speed.average} m/s</p> : null}
      {activity?.heartbeat?.average ? (
        <p>Average Heartrate: {activity.heartbeat.average} bpm</p>
      ) : null}
      {activity?.prs ? <p>PRs: {activity.prs}</p> : null}
      {activity?.achievements ? <p>Achievements: {activity.achievements}</p> : null}
    </div>
  </div>
))
