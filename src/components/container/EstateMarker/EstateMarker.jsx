import React from 'react';
import './EstateMarker.css';
import Marker from '../../presentational/Marker/Marker';
// import { totalRentalQuantity } from '../../../data/public-housing-marker-data';

export default function EstateMarker(props) {
  const getInterval = (number, intervalSize, rangeMin, rangeMax) => {
    let intervalCount = 1;

    for (let i = rangeMin; i + intervalSize - 1 <= rangeMax; i += intervalSize) {
      let intervalMin = i;
      let intervalMax = i + intervalSize - 1;

      if (isInRange(number, intervalMin, intervalMax)) {
        return intervalCount;
      }

      intervalMin += intervalSize;
      intervalCount++;
    }
  };

  const isInRange = (number, min, max) => {
    return number >= min && number <= max;
  };

  const radius = (value, baseRadius) => {
    const ratio = getInterval(value, 1000, 1, 15000);
    console.log(ratio);
    return baseRadius + (4 * ratio);
  }

  return (
    <svg
      className="estate-marker"
      onMouseOver={(e) => props.handleMouseOver(e, props.data)}
      onMouseOut={(e) => props.handleMouseOut(e)}>
      <Marker
        projection={props.projection}
        data={props.data}
        radius={8} />
    </svg>
  );
}
