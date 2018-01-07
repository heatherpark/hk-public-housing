import React from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import topoJSON from '../../data/world-map';

export default function Map() {
  const projection = geoMercator();
  const pathGenerator = geoPath().projection(projection);
  const features = feature(topoJSON, topoJSON.objects.countries).features;
  const pathStyles = {
    fill: 'white',
    stroke: 'black',
    strokeWidth: 0.5
  };

  const countries = features.map((feature, index) =>
    (<path
      key={`path${index}`}
      d={pathGenerator(feature)}
      className='countries'
      style={pathStyles}
    />)
  );

  return (
    <svg width={10000} height={1000}>
      {countries}
    </svg>
  );
}
