import { animateActivity, highlightActivity, showActivityMarker } from '../../store/actions'
import { Marker, Polyline } from 'react-google-maps'
import bike from '../../assets/icons/markers/bike.png'
import { connect } from 'react-redux'
import finishFlag from '../../assets/icons/markers/finishFlag.png'
import { last } from 'ramda'
import React from 'react'
import { ReduxActivity } from '../../interfaces/store/reducers'
import run from '../../assets/icons/markers/run.png'
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
}

export default connector(
  ({
    activity,
    color,
    showActivityMarker,
    highlightActivity,
    animateActivity,
  }: ActivityPolylineProps) => {
    if (!activity?.startPosition || !activity?.polyline) {
      return null
    }
    const { id, polyline, type, showMarker, isHighlighted, animationPercentage } = activity

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
                icon={type === 'Ride' ? bike : run}
              />
            )}
          </>
        )}
      </>
    )
  }
)
