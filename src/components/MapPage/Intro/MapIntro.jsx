import React from 'react';
import './MapIntro.css';
import MapHeading from '../Heading/MapHeading';
import MapDescription from '../Description/MapDescription';
import AccentBar from '../../AccentBar/AccentBar';

export default function MapIntro() {
  return (
    <div className="map-intro">
      <MapHeading />
      <AccentBar />
      <MapDescription />
    </div>
  );
}