import { compose, withProps } from 'recompose'
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps'
import React from 'react'

export default compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ children, ...props }) => <GoogleMap {...props}>{children}</GoogleMap>)
