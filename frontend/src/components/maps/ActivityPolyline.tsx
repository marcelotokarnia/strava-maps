import { animateActivity, highlightActivity, showActivityMarker } from '../../store/actions'
import { Marker, Polyline } from 'react-google-maps'
import { connect } from 'react-redux'
import finishFlag from '../../assets/icons/markers/finishFlag.png'
import { last } from 'ramda'
import React from 'react'
import { ReduxActivity } from '../../interfaces/store/reducers'
import startFlag from '../../assets/icons/markers/startFlag.png'

const mapDispatchToProps = {
  showActivityMarker,
  highlightActivity,
  animateActivity,
}

const connector = connect(null, mapDispatchToProps)

type ActivityPolylineProps = {
  activity: ReduxActivity
  showActivityMarker: typeof showActivityMarker
  highlightActivity: typeof highlightActivity
  color: string
  animateActivity: typeof animateActivity
  profile: {
    picture: string
  }
}

export default connector(
  ({
    activity,
    color,
    showActivityMarker,
    highlightActivity,
    animateActivity,
    profile,
  }: ActivityPolylineProps) => {
    if (!activity?.startPosition || !activity?.polyline || !profile) {
      return null
    }
    const { id, polyline, showMarker, isHighlighted, animationPercentage } = activity
    const { picture } = profile

    const onToggleOpen = () => {
      showActivityMarker({ id, show: !showMarker })
      !showMarker && highlightActivity({ id })
      !showMarker && animateActivity({ id })
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
            <Marker position={polyline[0]} onClick={onToggleOpen} icon={startFlag} />
            <Marker position={last(polyline)} onClick={onToggleOpen} icon={finishFlag} />
            {animationPercentage && (
              <Marker
                position={
                  polyline[
                    animationPercentage >= 1
                      ? polyline.length - 1
                      : Math.floor((polyline.length - 1) * animationPercentage)
                  ]
                }
                onClick={onToggleOpen}
                icon={`https://res.cloudinary.com/demo/image/fetch/w_32,h_32,c_fill,g_face,r_max,f_auto/${picture}`}
              />
            )}
          </>
        )}
      </>
    )
  }
)
