/**
 *
 * Marker
 *
 */

import React from 'react';
import './Marker.css';

function Marker(props) {
  const coordinates = [props.data.longitude, props.data.latitude];

  return (
    <circle
      className="marker"
      onMouseOver={(e) => props.handleMouseOver(e, props.data)}
      onMouseOut={(e) => props.handleMouseOut(e)}
      cx={props.projection(coordinates)[0]}
      cy={props.projection(coordinates)[1]}
      r={props.radius} />
  );
}

export default Marker;
