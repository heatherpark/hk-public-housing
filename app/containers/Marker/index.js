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
    <svg>
      <circle
        onMouseEnter={(e) => props.handleMouseEnter(e, props.data)}
        onMouseLeave={props.handleMouseLeave}
        cx={props.projection(coordinates)[0]}
        cy={props.projection(coordinates)[1]}
        style={props.styles} />
    </svg>
  );
}

export default Marker;
