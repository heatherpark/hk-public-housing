/**
*
* Tooltip
*
*/

import React from 'react';

function Tooltip(props) {
  const styles = {
    opacity: props.opacity
  };

  return (
    <div style={styles}>
      tippy <br />
      {props.estateName}
    </div>
  );
}

export default Tooltip;
