import React from 'react';
import './EstateMarker.css';
import Marker from '../../presentational/Marker/Marker';
import { totalRentalQuantity } from '../../../data/public-housing-marker-data';

export default function MarkerContainer(props) {
  const getRadius = (baseRadius, quantity, totalQuantity) => {
    const ratio = (quantity / (totalQuantity * 10)) * 100;
    return baseRadius * ratio;
  }

  const radius = getRadius(
    150,
    props.data.rentalQuantity,
    totalRentalQuantity
  );

  return (
    <svg
      className="estate-marker"
      onMouseOver={(e) => props.handleMouseOver(e, props.data)}
      onMouseOut={(e) => props.handleMouseOut(e)}>
      <Marker
        projection={props.projection}
        data={props.data}
        radius={radius} />
    </svg>
  );
}
