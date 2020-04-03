import React, { useState } from 'react';

export default function Keypad(props) {
  return (
    <div className="Keypad">
      { props.keyRows.map((keyRow, rowIndex) => 
        <div key={ keyRow } className="row">
          { keyRow.map((key, keyIndex) => 
            <Key
              key={ keyIndex }
              keyName={ key }
              isPressed={ !!props.pressedKeys[key] }
              isVirtuallyPressed={ !!props.virtualKeys.includes(key) }
              onClickDown={ props.onUIClickDown.bind(null, key) }
              onClickUp={ props.onUIClickUp.bind(null, key) }
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
  }

  function handleMouseUp() {
    props.onClickUp();
    setPressed(false);
  }

  return (
    <div
      className={ "drum-pad" + (props.isPressed || isPressed ? " pressed" : "" ) + (props.isVirtuallyPressed ? " virtual-pressed" : "") }
      onMouseDown={ handleMouseDown }
      onMouseUp={ handleMouseUp }
    >
      <p>{ props.keyName }</p>
    </div>
  );
}
