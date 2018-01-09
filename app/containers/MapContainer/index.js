/**
 *
 * MapContainer
 *
 */

import React from 'react';
import { feature } from 'topojson-client';
import { geoMercator } from 'd3-geo';
import Map from '../Map';
import topoJSON from '../../data/hong-kong.topo';
import markerData from '../../data/public-housing-marker-data';

export default function MapContainer() {
  const mapWidth = window.innerWidth;
  const mapHeight = window.innerHeight;
  const projection = geoMercator()
    .center([114.1095, 22.3964])
    .scale(100000)
    .translate([mapWidth / 2, mapHeight / 2]);
  const topoJSONFeatures = feature(topoJSON, topoJSON.objects['hong-kong']).features;
  const countryStyles = {
    stroke: '#FFF',
    strokeWidth: 0.5
  };
  const markerStyles = {
    fill: '#800000',
    stroke: '#FFF',
    r: 6
  };

  return (
    <div>
      <Map
        width={mapWidth}
        height={mapHeight}
        projection={projection} 
        topoJSONFeatures={topoJSONFeatures}
        countryStyles={countryStyles}
        markerData={markerData}
        markerStyles={markerStyles} />
    </div>
  );
}
