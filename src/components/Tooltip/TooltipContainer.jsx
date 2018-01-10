import React from 'react';
import Tooltip from './Tooltip';

export default function TooltipContainer(props) {
  const { data } = props;

  return (
    <Tooltip
      position={props.position}
      opacity={props.opacity}>
      <h6 className="estate-name">{data.estateName}</h6>
      <p className="details"><span className="label">District:</span> {data.districtName}</p>
      <p className="details"><span className="label">Intake Year:</span> {data.intakeYear}</p>
      <p className="details"><span className="label"># of Rental Units:</span> {data.rentalQuantity}</p>
    </Tooltip>
  );
}