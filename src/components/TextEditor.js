import React, { Component } from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

export default class TextEditor extends Component {
  constructor(props) {
    super(props);

    this.getMarkers = this.getMarkers.bind(this);
  }

  getMarkers() {
    if (this.props.markerConfig) {
      return [{
        startRow: this.props.markerConfig.line,
        endRow: this.props.markerConfig.line,
        startCol: this.props.markerConfig.char,
        endCol: this.props.markerConfig.char + 1,
        className: this.props.markerConfig.show ? 'line-highlight' : '',
        type: 'background'
      }];
    } else {
      return [];
    }
  }

  render() {
    return (
      <div className="text-editor">
        <div className="text-editor-header">
          <button onClick={ this.props.onCloseButtonClicked } disabled={ this.props.canClose } >x</button>
        </div>
        <AceEditor
          style={ { width: "100%", height: "100%" } }
          value={ this.props.code }
          mode="java"
          theme="github"
          onChange={ this.props.onCodeChange }
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          markers={ this.getMarkers() }
        />
      </div>
    );
  }
}
