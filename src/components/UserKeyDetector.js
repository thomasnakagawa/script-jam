import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserKeyPressed } from '../actions/keyActions';

import PlaySound from '../AudioPlayer';

function UserKeyDetector(props) {
  function handleKeyPress(keyEvent) {
    if (!props.isPlaying || document.activeElement.tagName !== "TEXTAREA") {
      props.onKeyDown(keyEvent.key);
      PlaySound(keyEvent.key);
    }
  }

  function handleKeyRelease(keyEvent) {
    if (!props.isPlaying || document.activeElement.tagName !== "TEXTAREA") {
      props.onKeyUp(keyEvent.key);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('keyup', handleKeyRelease);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('keyup', handleKeyRelease);
    };
  });

  return null; // renderless component
}

const mapStateToProps = state => ({
  userKeys: state.keys.userKeys,
  isPlaying: state.playback.isPlaying
});

const mapDispatchToProps = dispatch => ({
  onKeyDown: key => dispatch(setUserKeyPressed(key, true)),
  onKeyUp: key => dispatch(setUserKeyPressed(key, false))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserKeyDetector);
