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

const mapWidth = 600;
const mapHeight = 480;

const projection = geoMercator()
  .center([114.1095, 22.3964])
  .scale(50000)
  .translate([mapWidth / 2, mapHeight / 3]);

const topoJSONFeatures = feature(topoJSON, topoJSON.objects['hong-kong']).features;

export default function MapContainer() {
  return (
    <div>
      <Map
        width={mapWidth}
        height={mapHeight}
        projection={projection} 
        topoJSONFeatures={topoJSONFeatures}
        markerData={markerData}
        markerRadius={8} />
    </div>
  );
}
