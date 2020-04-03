import React, { Component } from 'react';
import ScriptEditor from './ScriptEditor';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

export default class Sequencer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      currentPlayingLine: -1,
      code: `v\nx\nz\nc\n\ns`,
      playbackInterval: null,
      runInterval: null
    }

    this.handleBeat = this.handleBeat.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.getMarkers = this.getMarkers.bind(this);
  }

  componentWillUnmount() {
    if (this.state.playbackInterval) {
      clearInterval(this.state.playbackInterval);
    }
    if (this.state.runInterval) {
      clearInterval(this.state.runInterval);
    }
  }

  handleBeat() {
    if (this.runInterval) {
      clearInterval(this.runInterval);
      this.setState({ runInterval: null });
    }

    const lineSplit = this.state.code.split(/\r\n|\r|\n/);
    const nextLineIndex = (this.state.currentPlayingLine + 1) % lineSplit.length;
    this.setState({ currentPlayingLine: nextLineIndex });

    const currentLine = lineSplit[nextLineIndex];

    if (currentLine.length > 0) {
      this.props.onVirtualKeys([currentLine.charAt(0)]);
      if (currentLine.length > 1) {
        // play a run of multiple notes
        const intervalLength = (60000 / this.props.tempo) / currentLine.length;
        let charIndex = 0;
        const newRunInterval = setInterval(() => {
          charIndex += 1;
          if (charIndex < currentLine.length) {
            this.props.onVirtualKeys([currentLine.charAt(charIndex)]);
          }
        }, intervalLength);
        this.setState({ runInterval: newRunInterval })
      }
    }
  }

  handlePlay() {
    if (this.state.playbackInterval) {
      clearInterval(this.state.playbackInterval);
      this.setState({ playbackInterval: null });
    }
    
    this.handleBeat();

    this.setState({
      isPlaying: true,
      playbackInterval: setInterval(this.handleBeat, 60000 / this.props.tempo)
    });
  }

  handleStop() {
    clearInterval(this.state.playbackInterval);
    this.setState({ isPlaying: false, currentPlayingLine: -1, playbackInterval: null });
    this.props.onVirtualKeys([]);
  }

  getMarkers() {
    return [{
      startRow: this.state.currentPlayingLine,
      endRow: this.state.currentPlayingLine + 1,
      className: this.state.isPlaying ? 'line-highlight' : '',
      type: 'background'
    }];
  }

  render() {
    return (
      <>
        <button onClick={ this.handlePlay }>Play</button>
        <button onClick={ this.handleStop }>Stop</button>
        <AceEditor
          value={ this.state.code }
          mode="java"
          theme="github"
          onChange={ c => this.setState({ code: c }) }
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          markers={ this.getMarkers() }
        />
      </>
    );
  }
}
