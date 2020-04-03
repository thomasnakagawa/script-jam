import React, { Component } from 'react';
import ScriptEditor from './ScriptEditor';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

export default class Sequencer extends Component {
  constructor(props) {
    super(props);

    this.getMarkers = this.getMarkers.bind(this);
  }

  getMarkers() {
    console.log(this.props.markerConfig);
    return [{
      startRow: this.props.markerConfig.line,
      endRow: this.props.markerConfig.line,
      startCol: this.props.markerConfig.char,
      endCol: this.props.markerConfig.char + 1,
      className: this.props.markerConfig.show ? 'line-highlight' : '',
      type: 'background'
    }];
  }

  render() {
    return (
      <AceEditor
        value={ this.props.code }
        mode="java"
        theme="github"
        onChange={ this.props.onCodeChange }
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        markers={ this.getMarkers() }
      />
    );
  }
}
