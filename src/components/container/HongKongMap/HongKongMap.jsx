import React from 'react';
import { feature } from 'topojson-client';
import { geoMercator } from 'd3-geo';

import Map from '../../presentational/Map/Map';
import './HongKongMap.css';
import topoJSON from '../../../data/hong-kong.topo';

import EstateTooltip from '../EstateTooltip/EstateTooltip';

import EstateMarker from '../EstateMarker/EstateMarker';
import { markerData } from '../../../data/public-housing-marker-data';

export default class HongKongMap extends React.Component {
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
    const mapWidth = 750;
    const mapHeight = 600;

    const projection = geoMercator()  // projection type
      .center([114.1095, 22.3964])  // set center of projection to Hong Kong coordinates
      .scale(65000)
      .translate([mapWidth / 2, mapHeight / 2.5]);

    const geoJSONObjectKey = 'hong-kong';
    const topoJSONFeatures = feature(topoJSON, topoJSON.objects[geoJSONObjectKey]).features;

    const markers = markerData &&
      markerData.map((data, index) => {
        return (
          <EstateMarker
            data={{
              ...data,
              coordinates: [
                data.longitude,
                data.latitude
              ]
            }}
            // TODO: Replace index as keys with other value
            key={index}
            projection={projection}
            handleMouseOver={this.handleMarkerMouseOver}
            handleMouseOut={this.handleMarkerMouseOut} />
        );
      });

    return (
      <div className="map">
        <EstateTooltip  
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
