import React from 'react';
import './Tooltip.css';

export default function Tooltip(props) {
  const { data } = props;
  const dynamicStyles = {
    top: props.position[1],
    left: props.position[0],
    opacity: props.opacity
  };

  return (
    <div className="tooltip"
      style={dynamicStyles}>
      Estate: {data.estateName} <br />
      District: {data.districtName} <br />
      Intake Year: {data.intakeYear} <br />
    </div>
  );
}
