import React from 'react';
import './Marker.css';
import Marker from './Marker';
import { totalRentalQuantity } from '../../data/public-housing-marker-data';

export default function MarkerContainer(props) {
  const getRadius = (baseRadius, quantity, totalQuantity) => {
    const ratio = (quantity / (totalQuantity * 14)) * 100;
    return baseRadius * ratio;
  }

  const radius = getRadius(
    100,
    props.data.rentalQuantity,
    totalRentalQuantity
  );

  return (
    <svg
      onMouseOver={(e) => props.handleMouseOver(e, props.data)}
      onMouseOut={(e) => props.handleMouseOut(e)}>
      <Marker
        projection={props.projection}
        data={props.data}
        radius={radius} />
    </svg>
  );
}
