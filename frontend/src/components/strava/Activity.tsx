import { compose, withStateHandlers } from "recompose";
import { Marker, Polyline, InfoWindow } from "react-google-maps";
import stravaGetActivity from "../../fixtures/straveGetActivity";
import polyline from "@mapbox/polyline";
import React from "react";

const path = polyline
  .decode(stravaGetActivity.map.polyline)
  .map(([lat, lng]) => ({ lat, lng }));

export default compose(
  withStateHandlers(
    () => ({
      isOpen: false
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen
      })
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
));
