import React from 'react';
import './Marker.css';

export default function Marker(props) {
  return (
    <circle
      className="marker fade-in"
      cy={props.projection(props.data.coordinates)[1]}
      cx={props.projection(props.data.coordinates)[0]}
      r={props.radius} />
  );
}