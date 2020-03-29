import { highlightActivity, showActivityMarker } from '../../store/actions'
import { InfoWindow, Marker, Polyline } from 'react-google-maps'
import { connect } from 'react-redux'
import React from 'react'
import { ReduxActivity } from '../../interfaces/store/reducers'

const mapDispatchToProps = {
  showActivityMarker,
  highlightActivity,
}

const connector = connect(null, mapDispatchToProps)

type ActivityPolyline = {
  activity: ReduxActivity
  showActivityMarker: typeof showActivityMarker
  highlightActivity: typeof highlightActivity
  color: string
}

export default connector(
  ({ activity, color, showActivityMarker, highlightActivity }: ActivityPolyline) => {
    if (!activity?.startPosition || !activity?.polyline) {
      return null
    }
    const {
      id,
      name,
      distance,
      startPosition: { lat, lng },
      polyline,
      showMarker,
      isHighlighted,
    } = activity

    const onToggleOpen = () => {
      showActivityMarker({ id, show: !showMarker })
      !showMarker && highlightActivity({ id })
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
          <Marker position={{ lat, lng }} onClick={onToggleOpen}>
            <InfoWindow onCloseClick={onToggleOpen}>
              <div>{`${name} - ${(distance / 1000).toFixed(2)}km`}</div>
            </InfoWindow>
          </Marker>
        )}
      </>
    )
  }
)
