import React from 'react';
import { geoPath } from 'd3-geo';
import Marker from '../Marker';
import Tooltip from '../../components/Tooltip';

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showTooltip: false,
      tooltipData: {},
      hoverPosition: []
    };

    this.handleMarkerMouseEnter = this.handleMarkerMouseEnter.bind(this);
    this.handleMarkerMouseLeave = this.handleMarkerMouseLeave.bind(this);
  }

  handleMarkerMouseEnter(event, data) {
    event.persist();

    setTimeout(() => {
      this.setState({ 
        showTooltip: true,
        tooltipData: data,
        hoverPosition: [event.clientX, event.clientY]
      });
    }, 300);
  }

  handleMarkerMouseLeave(event) {
    setTimeout(() => {
      this.setState({ showTooltip: false });
    }, 300);
  }

  render() {
    const pathGenerator = geoPath().projection(this.props.projection);
    const countries = this.props.topoJSONFeatures.map((feature, index) => {
      return (<path
        key={`path${index}`}
        d={pathGenerator(feature)}
        className='country'
        style={this.props.countryStyles}
        fill={`rgba(38,50,56,${(1 / 6)})`}
      />)
    });
    const markers = this.props.markerData &&
      this.props.markerData.map(data => {
        return (
          <Marker
            data={data}
            projection={this.props.projection}
            styles={this.props.markerStyles}
            handleMouseEnter={this.handleMarkerMouseEnter}
            handleMouseLeave={this.handleMarkerMouseLeave} />
        );
      });
    const containerStyles = {
      width: '100%',
      height: 'auto'
    };
    const svgStyle = {
      display: 'block'
    };

    return (
      <div style={containerStyles}>
        <Tooltip
          data={this.state.tooltipData}
          position={this.state.hoverPosition}
          opacity={this.state.showTooltip ? 1 : 0} />
        <svg viewBox={`0 0 ${this.props.width} ${this.props.height}`} style={svgStyle}>
          {countries}
          {this.props.markerData && markers}
        </svg>
      </div>
    );
  }
}
