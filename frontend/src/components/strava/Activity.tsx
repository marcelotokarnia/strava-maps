import { compose, withStateHandlers } from 'recompose'
import { InfoWindow, Marker, Polyline } from 'react-google-maps'
import { decode } from '@mapbox/polyline'
import React from 'react'

export default compose(
  withStateHandlers(
    () => ({
      isOpen: false,
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      }),
    }
  )
)(({ activity, isOpen, onToggleOpen }) => {
  if (!activity?.startPosition || !activity?.polyline) {
    return null
  }
  const {
    name,
    distance,
    startPosition: { lat, lng },
    polyline,
  } = activity
  return (
    <>
      <Marker position={{ lat, lng }} onClick={onToggleOpen}>
        <InfoWindow onCloseClick={onToggleOpen}>
          <div>{`${name} - ${distance / 1000}km`}</div>
        </InfoWindow>
      </Marker>
      {isOpen && (
        <Polyline
          path={decode(polyline).map(([lat, lng]) => ({ lat, lng }))}
          onClick={onToggleOpen}
        />
      )}
    </>
  )
})
