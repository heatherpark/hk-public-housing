import React, { Component } from 'react';
import './App.css';
import MapIntro from '../MapPage/Intro/MapIntro';
import MapContainer from '../Map/MapContainer';

class App extends Component {
  render() {
    return (
      <div>
        <MapIntro />
        <MapContainer />
      </div>
    );
  }
}

export default App;
