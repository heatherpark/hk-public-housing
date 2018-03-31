import React from 'react';
import { geoPath } from 'd3-geo';

export default function Map(props) {
  const pathGenerator = geoPath()
    .projection(props.projection);

  const countries = props.topoJSONFeatures
    .map((feature, index) => {
      return (
        <path
          // TODO: update key value
          key={`path${index}`}
          d={pathGenerator(feature)}
          className="country"
        />
      );
  });
  // viewBox={`0 0 ${props.width} ${props.height}`}

  return (
    <svg width={props.width} height={props.height}>
      {countries}
      {props.children}
    </svg>
  );
}
