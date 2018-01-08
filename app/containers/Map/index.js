import React from 'react';
import { geoPath } from 'd3-geo';
import Marker from '../Marker';

export default function Map(props) {
  const pathGenerator = geoPath().projection(props.projection);
  const countries = props.topoJSONFeatures.map((feature, index) =>
    (<path
      key={`path${index}`}
      d={pathGenerator(feature)}
      className='country'
      style={props.pathStyles}
    />)
  );

  return (
    <svg width={props.width} height={props.height}>
      {countries}
      {/* <Marker /> */}
    </svg>
  );
}
