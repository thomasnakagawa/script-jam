import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PlaySound from '../AudioPlayer';

import { editTrackCursor } from '../actions/trackActions';
import { setScriptKeyPressed } from '../actions/keyActions';
import { setTrackPlayingLine } from '../actions/playbackActions';

function TrackPlayer(props) {
  const [lineInterval, setLineInterval] = useState(null);
  const [charInterval, setCharInterval] = useState(null);
  const [currentLineNumber, setCurrentLine] = useState(0);

  /*
  function HandleChar(key) {
    if (lastPlayedKey) {
      props.setScriptKeyPressed(lastPlayedKey, false);
    }
    setLastPlayedKey(key);
    props.setScriptKeyPressed(key, true);
    PlaySound(key);
  }*/

  function HandleLine() {
    const lineSplit = props.track.code.split(/\r\n|\r|\n/);
    const currentLine = lineSplit[currentLineNumber];

    if (currentLine.length > 0) {
        //HandleChar(currentLine.charAt(0));
        console.log("playing line" + currentLine);
        props.setTrackCursor(0, currentLineNumber, 0);
    }

    // setup for next line
    const nextLine = (currentLineNumber + 1) % lineSplit.length;
    setCurrentLine(nextLine);

    console.log(lineSplit.length);
  }

  useEffect(() => {
    if (props.isPlaying) {
      HandleLine();
      console.log("On Play");
      setLineInterval(setInterval(HandleLine, 3000 /*TODO: use tempo */));
    } else {
      clearInterval(lineInterval);
      setLineInterval(null);

      clearInterval(charInterval);
      setCharInterval([]);
    }
  }, [props.isPlaying]);
  return null;
}

const mapStateToProps = state => {
  return {
    isPlaying: state.playback.isPlaying,
    tempo: state.playback.tempo
  }
};

const mapDispatchToProps = dispatch => ({
  setTrackCursor: (index, line, char) => dispatch(editTrackCursor(index, line, char)),
  setScriptKeyPressed: (key, isPressed) => dispatch(setScriptKeyPressed(key, isPressed))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackPlayer);