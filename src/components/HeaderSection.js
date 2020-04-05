import React from 'react';
import { connect } from 'react-redux';
import { startPlayback, stopPlayback } from '../actions/playbackActions';

function HeaderSection(props) {
  return (
    <div className="header-section">
      <h1>Beat text thing</h1>
      <button onClick={ props.isPlaying ? props.stopPlayback : props.startPlayback } >{ props.isPlaying ? "stop" : "play" }</button>
    </div>
  );
}

const mapStateToProps = state => ({
  isPlaying: state.playback.isPlaying
});

const mapDispatchToProps = dispatch => ({
  startPlayback: () => dispatch({ type: "START_PLAYBACK" }),
  stopPlayback: () => dispatch(stopPlayback())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSection);
