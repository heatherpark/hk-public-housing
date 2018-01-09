/**
 *
 * Marker
 *
 */

import React from 'react';

function Marker(props) {
  const coordinates = [props.data.longitude, props.data.latitude];

  return (
    <circle
      onMouseOver={(e) => props.handleMouseOver(e, props.data)}
      onMouseOut={(e) => props.handleMouseOut(e)}
      cx={props.projection(coordinates)[0]}
      cy={props.projection(coordinates)[1]}
      style={props.styles} />
  );
}

export default Marker;
