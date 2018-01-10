import React from 'react';
import Tooltip from './Tooltip';

export default function TooltipContainer(props) {
  const { data } = props;

  return (
    <Tooltip
      position={props.position}
      opacity={props.opacity}>
      <p>Estate: {data.estateName}</p>
      <p>District: {data.districtName}</p>
      <p>Intake Year: {data.intakeYear}</p>
    </Tooltip>
  );
}