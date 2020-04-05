import React from 'react';
import Keypad from './Keypad';
import KeyboardDetector from './KeyboardDetector';
import { chunk, reverse } from 'lodash';

export default function Sampler(props) {
  return (
    <div className="Sampler">
      <KeyboardDetector
        onKeyDown={ props.onKeyDown }
        onKeyUp={ props.onKeyUp }
        virtualKeys={ props.virtualKeys }
      >
        <Keypad keyRows={ reverse(chunk(props.playableKeys, 12)) } />
        <Keypad keyRows={ reverse(chunk(props.playableKeys, 12)) } />
      </KeyboardDetector>
    </div>
  );
}
