import React from 'react';
import './MapPage.css';
import MapIntro from '../Intro/MapIntro';
import MapContainer from '../../Map/MapContainer';

export default function MapPage() {
  return (
    <div className="map-page">
      <div className="intro-container">
        <MapIntro />
      </div>
      <div className="map-container">
        <MapContainer />
      </div>
    </div>
  );
}