import { compose, withProps } from 'recompose'
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps'
import React from 'react'

export default compose(
  withProps(props => ({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyC_kmVi1Y-PEiJruIj2pGorJ7GPvy3j05Y&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div className="h-100" />,
    mapElement: <div className="h-100" />,
    ...(props.containerElement
      ? {}
      : { containerElement: <div className="ma2" style={{ height: '800px', flex: '2 1 0' }} /> }),
  })),
  withScriptjs,
  withGoogleMap
)(({ children, forwardedRef, ...props }) => (
  <GoogleMap {...props} ref={forwardedRef}>
    {children}
  </GoogleMap>
))
