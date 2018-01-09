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
  const mapWidth = 600;
  const mapHeight = 480;

  const projection = geoMercator()  // projection type
    .center([114.1095, 22.3964])  // set center of projection to Hong Kong coordinates
    .scale(50000)
    .translate([mapWidth / 2, mapHeight / 3]);

  const geoJSONObjectKey = 'hong-kong';
  const topoJSONFeatures = feature(topoJSON, topoJSON.objects[geoJSONObjectKey]).features;

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
