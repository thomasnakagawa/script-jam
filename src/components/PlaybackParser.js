import { Component } from 'react';
import { connect } from 'react-redux';
import PlaySound from '../AudioPlayer';

import { editTrackCursor } from '../actions/trackActions';
import { setScriptKeyPressed, clearPressedKeys } from '../actions/keyActions';
import { setTrackPlayingLine } from '../actions/playbackActions';

class PlaybackParser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineInterval: null,
      charIntervals: [],
      lastPressedKeys: []
    }

    this.HandlePlay = this.HandlePlay.bind(this);
    this.HandleStop = this.HandleStop.bind(this);
    this.HandleLine = this.HandleLine.bind(this);
    this.HandleChar = this.HandleChar.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isPlaying && this.props.isPlaying) {
      this.HandlePlay();
    }
    if (prevProps.isPlaying && !this.props.isPlaying) {
      this.HandleStop();
    }
  }

  HandlePlay() {
    this.setState({
      charIntervals: new Array(this.props.tracks.length),
      lastPressedKeys: new Array(this.props.tracks.length),
      lineInterval: setInterval(this.HandleLine, (60000 / this.props.tempo))
    }, () => {
      this.HandleLine();
    });
  }

  HandleStop() {
    clearInterval(this.state.lineInterval);
    this.state.charIntervals.forEach(interval => clearInterval(interval));
    this.setState({
      charIntervals: [],
      lineInterval: null
    });
    this.props.clearPressedKeys();
  }

  HandleLine() {
    this.props.tracks.forEach((track, trackIndex) => {
      // stop any char intervals for this track
      if (this.state.charIntervals[trackIndex]) {
        clearInterval(this.state.charIntervals[trackIndex]);
      }

      // get the current line to play
      const currentLineIndex = this.props.playingLines[trackIndex] || 0;
      const lineSplit = track.code.split(/\r\n|\r|\n/);
      const currentLine = lineSplit[currentLineIndex || 0];

      // play the sound of the characters at interval
      if (currentLine && currentLine.length > 0) {
        this.HandleChar(currentLine.charAt(0), trackIndex);
        this.props.setTrackCursor(trackIndex, true, currentLineIndex, 0);

        if (currentLine.length > 1) {
          const charIntvCopy = this.state.charIntervals.slice();

          let charIndex = 1
          charIntvCopy[trackIndex] = setInterval(() => {
            this.HandleChar(currentLine.charAt(charIndex), trackIndex);
            this.props.setTrackCursor(trackIndex, true, currentLineIndex, charIndex);

            charIndex += 1;
          }, (60000 / this.props.tempo) / currentLine.length);
          this.setState({ charIntervals: charIntvCopy });
        }
      }

      // setup for next line
      const nextLine = (currentLineIndex + 1) % lineSplit.length;
      this.props.setTrackPlayingLine(trackIndex, nextLine);
    });
  }

  HandleChar(key, trackIndex) {
    if (this.state.lastPressedKeys[trackIndex]) {
      this.props.setScriptKeyPressed(this.state.lastPressedKeys[trackIndex], false);
    }
    this.props.setScriptKeyPressed(key, true);
    PlaySound(key);

    const lastPressCopy = this.state.lastPressedKeys.slice();
    lastPressCopy[trackIndex] = key
    this.setState({ lastPressedKeys: lastPressCopy });
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => {
  return {
    tracks: state.tracks,
    playingLines: state.playback.trackPlayLine,
    isPlaying: state.playback.isPlaying,
    tempo: state.playback.tempo
  }
};

const mapDispatchToProps = dispatch => ({
  setTrackPlayingLine: (index, line) => dispatch(setTrackPlayingLine(index, line)),
  setTrackCursor: (index, show, line, char) => dispatch(editTrackCursor(index, show, line, char)),
  setScriptKeyPressed: (key, isPressed) => dispatch(setScriptKeyPressed(key, isPressed)),
  clearPressedKeys: () => dispatch(clearPressedKeys())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaybackParser);