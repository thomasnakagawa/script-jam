import React, { Component } from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

export default function ScriptEditor(props) {
  function getMarkers() {
    console.log(props.currentPlayingLine);
    const markers = [];
    if (props.isPlaying) {
      markers.push([{
        startRow: props.currentPlayingLine,
        endRow: props.currentPlayingLine + 1,
        className: 'line-highlight',
        type: 'background'
      }]);
    }
    return markers;
  }

  return (
    <AceEditor
      value={ props.value }
      mode="java"
      theme="github"
      onChange={ props.onCodeChange }
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      markers={ getMarkers() }
    />
  );
}
