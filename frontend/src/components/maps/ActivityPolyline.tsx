import { animateActivity, findOnSidelist, highlightActivity } from '../../store/actions/thunks'
import { connect, ConnectedProps } from 'react-redux'
import { InfoWindow, Marker, Polyline } from 'react-google-maps'
import { ActivitiesActions } from '../../store/actions'
import finishFlag from '../../assets/icons/markers/finishFlag.png'
import { last } from 'ramda'
import { ParsedStravaProfile } from '../../interfaces/profile'
import React from 'react'
import { ReduxActivity } from '../../interfaces/store/reducers'
import startFlag from '../../assets/icons/markers/startFlag.png'

const mapDispatchToProps = {
  showActivityMarker: ActivitiesActions.showActivityMarker,
  highlightActivity,
  animateActivity,
  findOnSidelist,
}

const connector = connect(null, mapDispatchToProps)

type ActivityPolylineProps = ConnectedProps<typeof connector> & {
  activity: ReduxActivity
  color: string
  profile: ParsedStravaProfile
}

export default connector(
  ({
    activity,
    color,
    showActivityMarker,
    highlightActivity,
    animateActivity,
    profile,
    findOnSidelist,
  }: ActivityPolylineProps) => {
    if (!activity?.startPosition || !activity?.polyline || !profile) {
      return null
    }
    const { id, polyline, name, showMarker, isHighlighted, animationPercentage } = activity
    const { picture } = profile

    const onToggleOpen = () => {
      showActivityMarker({ id, show: !showMarker })
      !showMarker && highlightActivity({ id })
    }

    const onClickAnimate = () => {
      animateActivity({ id })
    }

    const onClickFindSidelist = () => {
      findOnSidelist({ id })
    }

    return (
      <>
        <Polyline
          path={polyline}
          onClick={onToggleOpen}
          options={{
            zIndex: isHighlighted || showMarker ? '999' : null,
            strokeColor: isHighlighted ? '#000000' : color,
            strokeWeight: 4,
          }}
        />
        {showMarker && (
          <>
            <Marker position={polyline[0]} onClick={onToggleOpen} icon={startFlag}>
              <InfoWindow>
                <div>
                  <h3>{name}</h3>
                  <button className="br3 bg-light-gray pointer" onClick={onClickFindSidelist}>
                    Find on side list
                  </button>
                  <button
                    className={`br3 bg-light-gray ${animationPercentage ? 'moon-gray' : 'pointer'}`}
                    onClick={!animationPercentage && onClickAnimate}
                  >
                    Animate
                  </button>
                </div>
              </InfoWindow>
            </Marker>
            <Marker position={last(polyline)} onClick={onToggleOpen} icon={finishFlag} />
            {animationPercentage ? (
              <Marker
                position={
                  polyline[
                    animationPercentage >= 1
                      ? polyline.length - 1
                      : Math.floor((polyline.length - 1) * animationPercentage)
                  ]
                }
                onClick={onToggleOpen}
                icon={`https://res.cloudinary.com/marcelotokarnia/image/fetch/w_32,h_32,c_fill,g_face,r_max,f_auto/${picture}`}
              />
            ) : null}
          </>
        )}
      </>
    )
  }
)
