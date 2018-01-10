import React from 'react';
import { feature } from 'topojson-client';
import { geoMercator } from 'd3-geo';

import Map from './Map';
import './Map.css';
import topoJSON from '../../data/hong-kong.topo';

import TooltipContainer from '../../components/TooltipContainer';

import MarkerContainer from '../MarkerContainer';
import markerData from '../../data/public-housing-marker-data';

export default class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showTooltip: false,
      tooltipData: {},
      hoverPosition: []
    };

    this.handleMarkerMouseOver = this.handleMarkerMouseOver.bind(this);
    this.handleMarkerMouseOut = this.handleMarkerMouseOut.bind(this);
  }

  handleMarkerMouseOver(event, data) {
    event.persist();

    setTimeout(() => {
      this.setState({ 
        showTooltip: true,
        tooltipData: data,
        hoverPosition: [event.clientX, event.clientY]
      });
    }, 300);
  }

  handleMarkerMouseOut(event) {
    setTimeout(() => {
      this.setState({ showTooltip: false });
    }, 300);
  }

  render() {
    const mapWidth = 600;
    const mapHeight = 480;

    const projection = geoMercator()  // projection type
      .center([114.1095, 22.3964])  // set center of projection to Hong Kong coordinates
      .scale(30000)
      .translate([mapWidth / 2, mapHeight / 3]);

    const geoJSONObjectKey = 'hong-kong';
    const topoJSONFeatures = feature(topoJSON, topoJSON.objects[geoJSONObjectKey]).features;

    const markers = markerData &&
      markerData.map(data => {
        return (
          <MarkerContainer
            data={{
              ...data,
              coordinates: [
                data.longitude,
                data.latitude
              ]
            }}
            projection={projection}
            radius={9}
            handleMouseOver={this.handleMarkerMouseOver}
            handleMouseOut={this.handleMarkerMouseOut} />
        );
      });

    return (
      <div className="map">
        <TooltipContainer  
          data={this.state.tooltipData}
          position={this.state.hoverPosition}
          opacity={this.state.showTooltip ? 1 : 0} />
        <Map
          width={mapWidth}
          height={mapHeight}
          projection={projection}
          topoJSONFeatures={topoJSONFeatures}
          markerData={markerData}
          markerRadius={8}>
          {/* only map-related SVG elements should be children of Map */}
          {markers}
        </Map>
      </div>
    );
  }
}
