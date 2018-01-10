import React from 'react';
import './Tooltip.css';

export default function Tooltip(props) {
  const dynamicStyles = {
    top: props.position[1],
    left: props.position[0],
    opacity: props.opacity
  };

  return (
    <div className="tooltip"
      style={dynamicStyles}>
      {props.children}
    </div>
  );
}
