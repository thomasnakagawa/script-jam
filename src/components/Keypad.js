import React, { useState } from 'react';
import PlaySound from '../AudioPlayer';

export default function Keypad(props) {
  return (
    <div className="Keypad">
      { props.keyRows.map((keyRow, rowIndex) => 
        <div key={ keyRow } className="row">
          { keyRow.map((key, keyIndex) => 
            <Key
              keyClass={ props.keyClass }
              key={ keyIndex }
              keyName={ key }
              isPressed={ !!props.userKeys[key] }
              isVirtuallyPressed={ !!props.scriptKeys[key] }
              onClickDown={ props.onKeyDown.bind(null, key) }
              onClickUp={ props.onKeyUp.bind(null, key) }
            />
          ) }
        </div>
      ) }
    </div>
  );
}

function Key(props) {
  const [isPressed, setPressed] = useState(false);

  function handleMouseDown() {
    props.onClickDown();
    setPressed(true);
    PlaySound(props.keyName);
  }

  function handleMouseUp() {
    props.onClickUp();
    setPressed(false);
  }

  return (
    <div
      className={ "drum-pad" + (props.isPressed || isPressed ? " pressed" : "" ) + (props.isVirtuallyPressed ? " virtual-pressed" : "") + " " + (props.keyName ? props.keyClass : "spacer") }
      onMouseDown={ handleMouseDown }
      onMouseUp={ handleMouseUp }
    >
      <p>{ props.keyName }</p>
    </div>
  );
}
