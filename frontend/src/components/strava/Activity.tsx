import { compose, withStateHandlers } from 'recompose'
import { InfoWindow, Marker, Polyline } from 'react-google-maps'
import polyline from '@mapbox/polyline'
import React from 'react'
import stravaGetActivity from '../../fixtures/straveGetActivity'

const path = polyline.decode(stravaGetActivity.map.polyline).map(([lat, lng]) => ({ lat, lng }))

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
)(({ activity: { name, start_latlng: [lat, lng] }, isOpen, onToggleOpen }) => (
  <>
    <Marker position={{ lat, lng }} onClick={onToggleOpen}>
      <InfoWindow onCloseClick={onToggleOpen}>
        <div>{name}</div>
      </InfoWindow>
    </Marker>
    {isOpen && <Polyline path={path} onClick={onToggleOpen} />}
  </>
))
