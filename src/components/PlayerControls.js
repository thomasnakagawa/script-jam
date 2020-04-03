import React, { Component } from 'react';

export default class PlayerControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      currentPlayingLine: -1,
      playbackInterval: null,
      runInterval: null
    }

    this.handlePlay = this.handlePlay.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleLine = this.handleLine.bind(this);
  }

  componentWillUnmount() {
    if (this.state.playbackInterval) {
      clearInterval(this.state.playbackInterval);
    }
    if (this.state.runInterval) {
      clearInterval(this.state.runInterval);
    }
  }


  handlePlay() {
    // stop any existing playback interval
    if (this.state.playbackInterval) {
      clearInterval(this.state.playbackInterval);
      this.setState({ playbackInterval: null });
    }
    
    // immediately play the first line
    this.handleLine();

    // play lines at interval
    this.setState({
      isPlaying: true,
      playbackInterval: setInterval(this.handleLine, 60000 / this.props.tempo)
    });
  }

  handleStop() {
    clearInterval(this.state.playbackInterval);
    clearInterval(this.state.runInterval);
    this.setState({ isPlaying: false, currentPlayingLine: -1, playbackInterval: null, runInterval: null });
    this.props.onVirtualKeys([]);
    //this.props.onMarkerChange({ line: 0, char: 0, show: false });

  }

  handleLine() {
    // stop any run interval
    if (this.runInterval) {
      clearInterval(this.runInterval);
      this.setState({ runInterval: null });
    }

    const lineSplit = this.props.tracks[0].code.split(/\r\n|\r|\n/);
    const nextLineIndex = (this.state.currentPlayingLine + 1) % lineSplit.length;
    this.setState({ currentPlayingLine: nextLineIndex });

    const currentLine = lineSplit[nextLineIndex];

    if (currentLine.length > 0) {
      this.props.onVirtualKeys([currentLine.charAt(0)]);
      this.props.onMarkerChange({ line: nextLineIndex, char: 0, show: true });
      if (currentLine.length > 1) {
        // play a run of multiple notes
        const intervalLength = (60000 / this.props.tempo) / currentLine.length;
        let charIndex = 0;
        const newRunInterval = setInterval(() => {
          charIndex += 1;
          if (charIndex < currentLine.length) {
            this.props.onVirtualKeys([currentLine.charAt(charIndex)]);
            this.props.onMarkerChange({ line: nextLineIndex, char: charIndex, show: true });
          }
        }, intervalLength);
        this.setState({ runInterval: newRunInterval })
      }
    }
  }

  render() {
    return (
      <div>
        <button onClick={ this.handlePlay }>Play</button>
        <button onClick={ this.handleStop }>Stop</button>
      </div>
    );
  }
}
