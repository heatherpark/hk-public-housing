/**
*
* Tooltip
*
*/

import React from 'react';

function Tooltip(props) {
  const styles = {
    opacity: props.opacity,
    display: 'inline-block',
    position: 'absolute',
    top: props.position[1],
    left: props.position[0],
    fontFamily: 'Anonymous Pro',
    backgroundColor: '#FFF',
    fontSize: '10px'
  };
  const { data } = props;

  return (
    <div style={styles}>
      Estate: {data.estateName} <br />
      District: {data.districtName} <br />
      Intake Year: {data.intakeYear} <br />
    </div>
  );
}

export default Tooltip;
