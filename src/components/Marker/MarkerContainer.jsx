import React from 'react';
import './Marker.css';
import Marker from './Marker';

export default function MarkerContainer(props) {
  return (
    <svg
      onMouseOver={(e) => props.handleMouseOver(e, props.data)}
      onMouseOut={(e) => props.handleMouseOut(e)}>
      <Marker
        projection={props.projection}
        data={props.data}
        radius={props.radius} />
    </svg>
  );
}
