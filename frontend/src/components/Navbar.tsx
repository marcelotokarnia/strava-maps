import githubIcon from '../assets/icons/social/github.png'
import React from 'react'
import stravaIcon from '../assets/icons/social/strava.png'

const STRAVA_CLIENT_ID = 'client_id=28106'
const STRAVA_OUATH_ENDPOINT = 'https://www.strava.com/oauth/authorize'
const LOGIN_ROUTE = 'redirect_uri=https://strava-maps.herokuapp.com/login'
const RESPONSE_TYPE = 'response_type=code'
const SCOPE = 'scope=activity:read_all'

const GITHUB_LINK = 'https://www.github.com/marcelotokarnia/strava-maps'

export default () => (
  <nav className="dt w-100 border-box pa3">
    <div className="dtc v-mid w-75 tr">
      <a
        className="link dim dark-gray f5 dib mr3"
        href={`${STRAVA_OUATH_ENDPOINT}?${STRAVA_CLIENT_ID}&${LOGIN_ROUTE}&${RESPONSE_TYPE}&${SCOPE}`}
        title="About"
      >
        Strava Login
        <img src={stravaIcon} className="dib w2 br-100" alt="Site Name" />
      </a>
      <a className="link dim dark-gray f5 dib mr3" href={GITHUB_LINK} title="Store">
        View source
        <img src={githubIcon} className="dib w2 br-100" alt="Site Name" />
      </a>
    </div>
  </nav>
)
