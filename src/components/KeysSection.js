import React from 'react';
import { connect } from 'react-redux';
import Keypad from './Keypad';
import { setUserKeyPressed } from '../actions/keyActions';
import { chunk, reverse } from 'lodash';

const bassKeys = ["z", "x", "c", "v", "a", "s", "d", "f", "q", "w", "e", "r", "1", "2", "3", "4"]
const leadKeys = ["b", "n", "m", ",", "g", "h", "j", "k", "t", "y", "u", "i", "5", "6", "7", "8"]
const drumKeys = [".", "/", null, null, "l", ";", "'", null, "o", "p", "[", "]", "9", "0", "-", '=' ]

function KeysSection(props) {
  return (
    <div className="keys-section">
      <Keypad
        keyClass="bass"
        keyRows={ reverse(chunk(bassKeys, 4)) }
        onKeyDown={ key => props.setUserKeyPressed(key, true) }
        onKeyUp={ key => props.setUserKeyPressed(key, false) }
        userKeys={ props.userKeys}
        scriptKeys={ props.scriptKeys }
      />
      <Keypad
        keyClass="lead"
        keyRows={ reverse(chunk(leadKeys, 4)) }
        onKeyDown={ key => props.setUserKeyPressed(key, true) }
        onKeyUp={ key => props.setUserKeyPressed(key, false) }
        userKeys={ props.userKeys}
        scriptKeys={ props.scriptKeys }
      />
      <Keypad
        keyClass="drum"
        keyRows={ reverse(chunk(drumKeys, 4)) }
        onKeyDown={ key => props.setUserKeyPressed(key, true) }
        onKeyUp={ key => props.setUserKeyPressed(key, false) }
        userKeys={ props.userKeys}
        scriptKeys={ props.scriptKeys }
      />
    </div>
  );
}

const mapStateToProps = state => ({
  userKeys: state.keys.userKeys,
  scriptKeys: state.keys.scriptKeys
});

const mapDispatchToProps = dispatch => ({
  setUserKeyPressed: (key, isPressed) => dispatch(setUserKeyPressed(key, isPressed))
});

export default connect(mapStateToProps, mapDispatchToProps)(KeysSection);