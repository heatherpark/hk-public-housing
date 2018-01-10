import React from 'react';
import './Marker.css';

export default function Marker(props) {
  return (
    <circle
      className="marker"
      onMouseOver={(e) => props.handleMouseOver(e, props.data)}
      onMouseOut={(e) => props.handleMouseOut(e)}
      cy={props.projection(props.data.coordinates)[1]}
      cx={props.projection(props.data.coordinates)[0]}
      r={props.radius} />
  );
}
