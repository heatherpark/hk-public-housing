import React from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import topoJSON from '../../data/hong-kong.topo';
import Marker from '../Marker';

export default function Map() {
  const width = 700;
  const height = 580;
  const projection = geoMercator().rotate([-114.1095, -22.3964]).scale(70000).translate([width / 2, height / 2]);
  const pathGenerator = geoPath().projection(projection);
  const features = feature(topoJSON, topoJSON.objects['hong-kong']).features;
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
    <svg width={width} height={height}>
      {countries}
      <Marker />
    </svg>
  );
}
