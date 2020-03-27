import { compose, withProps } from 'recompose'
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps'
import React from 'react'

export default compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div className="h-100" />,
    containerElement: <div className="ma2" style={{ height: '800px', flex: 5 }} />,
    mapElement: <div className="h-100" />,
  }),
  withScriptjs,
  withGoogleMap
)(({ children, ...props }) => {
  return <GoogleMap {...props}>{children}</GoogleMap>
})
