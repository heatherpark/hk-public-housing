import React from 'react';
import './MapIntro.css';
import MapHeading from '../Heading/MapHeading';
import MapDescription from '../Description/MapDescription';

export default function MapIntro() {
  return (
    <div className="map-intro">
      <MapHeading />
      <MapDescription />
    </div>
  );
}