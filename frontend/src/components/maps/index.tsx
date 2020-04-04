import { compose, withProps } from 'recompose'
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps'
import React from 'react'

export default compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyC_kmVi1Y-PEiJruIj2pGorJ7GPvy3j05Y&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div className="h-100" />,
    containerElement: <div className="ma2" style={{ height: '800px', flex: '2 1 0' }} />,
    mapElement: <div className="h-100" />,
  }),
  withScriptjs,
  withGoogleMap
)(({ children, ...props }) => {
  return <GoogleMap {...props}>{children}</GoogleMap>
})
