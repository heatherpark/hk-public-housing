import React from 'react';

export default function Marker(props) {
  return (
    <circle
      className="marker"
      cy={props.projection(props.data.coordinates)[1]}
      cx={props.projection(props.data.coordinates)[0]}
      r={props.radius} />
  );
}