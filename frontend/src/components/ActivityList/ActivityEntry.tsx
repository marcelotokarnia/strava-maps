import moment from 'moment'
import React from 'react'

const pad = (num, size) => {
  const s = '000000000' + num
  return s.substr(s.length - size)
}

export default ({ activity }) => (
  <a className="link dim gray f5 db pa3" href="#">
    <span className="f6 grow br-pill ph2 pv2 mr1 dib black bg-gray">
      {moment(activity.startDate).format('MMM DD YYYY')}
    </span>
    {activity.name}
    <span className="f6 grow br-pill ph2 pv2 dib white bg-black fr">
      {pad((activity.distance / 1000).toFixed(2), 5)}km
    </span>
  </a>
)
