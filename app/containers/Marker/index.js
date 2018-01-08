/**
 *
 * Marker
 *
 */

import React from 'react';

function Marker(props) {
  const { longitude, latitude } = props.data;
  const coordinates = [longitude, latitude];

  return (
    <circle
      cx={props.projection(coordinates)[0]}
      cy={props.projection(coordinates)[1]}
      style={props.styles} />
  );
}

export default Marker;
