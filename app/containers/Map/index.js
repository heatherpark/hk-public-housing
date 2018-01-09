import React from 'react';
import { geoPath } from 'd3-geo';
import Marker from '../Marker';

export default function Map(props) {
  const pathGenerator = geoPath().projection(props.projection);
  const countries = props.topoJSONFeatures.map((feature, index) => {
    return (<path
      key={`path${index}`}
      d={pathGenerator(feature)}
      className='country'
      style={props.countryStyles}
      fill={`rgba(38,50,56,${(1 / 6)})`}
    />)
  });
  const markers = props.markerData &&
    props.markerData.map(data => {
      return (
        <Marker
          data={data}
          projection={props.projection}
          styles={props.markerStyles} />
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
    // <svg viewBox="0 0 500 500">
    <div style={containerStyles}>
      <svg viewBox={`0 0 ${props.width} ${props.height}`} style={svgStyle}>
        {countries}
        {props.markerData && markers}
      </svg>
    </div>
  );
}
