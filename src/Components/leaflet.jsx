import React, { Component } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";

class Leaflet extends Component {
  render() {
    const geo = !this.props.data.gps ? "45.7594, 4.8280" : this.props.data.gps;
    const lat = geo.split(",")[0];
    const lon = geo.split(",")[1];
    const position = [lat, lon];
    return (
      <Map center={position} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}></Marker>
      </Map>
    );
  }
}
export default Leaflet;
