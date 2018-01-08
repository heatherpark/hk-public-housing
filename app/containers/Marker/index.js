/**
 *
 * Marker
 *
 */

import React from 'react';
import { geoMercator, geoPath } from 'd3-geo';

function Marker() {
  const width = 700;
  const height = 580;
  const coords = [ 114.12577, 22.49311 ];
  const feature = { "type": "Feature", "id": 1, "geometry": { "type": "Point", "coordinates": [ 114.12577, 22.49311 ] } }
  const projection = geoMercator().rotate([-114.1095, -22.3964]).scale(70000).translate([width / 2, height / 2]);
  const pathGenerator = geoPath().projection(projection);
  return (
    <circle
      cx={projection(coords)[0]}
      cy={projection(coords)[1]}
      r="10px"
      fill="black"
      stroke="black" />
    // <path
    //   d={pathGenerator(feature)}
    //   className="marker"
    //   fill="black"
    //   stroke="black"
    // />
  );
}

export default Marker;
