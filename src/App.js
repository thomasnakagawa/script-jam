import React, { useState } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';

import './App.css';
import './style';

import Sampler from './components/Sampler';
//import Sequencer from './components/Sequencer';
import SoundPlayer from './components/SoundPlayer';
import PlayerControls from './components/PlayerControls';

import HeaderSection from './components/HeaderSection';
import EditorSection from './components/EditorSection';

const bassKeys = ["z", "x", "c", "v", "a", "s", "d", "f", "q", "w", "e", "r", "1", "2", "3", "4"]
const leadKeys = ["b", "n", "m", ",", "g", "h", "j", "k", "t", "y", "u", "i", "5", "6", "7", "8"]
//const drumKeys = ["b", "n", "m", ",", "g", "h", "j", "k", "t", "y", "u", "i", "5", "6", "7", "8"]

function App(props) {
  const [tempo] = useState(120);
  const [currentTrack] = useState(0);
  const [virtualKeys, setVirtualKeys] = useState([]);
  const [userKey, setUserKey] = useState(null);
  const [markerConfig, setMarker] = useState({ line: 0, char: 0, show: false });

  const [tracks, updateTracks] = useState([{
    type: "pitch",
    code:
`q
 e
d
 s
 s
d f 
d  d
 1`
  }]);
  return (
    <div className="App">
      <button onClick={ () => props.dispatch({ type: 'ADD_TRACK' }) }>Test redux action</button>
      <pre>
      {
        JSON.stringify(props)
      }
      </pre>

      <HeaderSection />

      <Sampler
        playableKeys={ bassKeys }
        virtualKeys={ virtualKeys }
        onKeyDown={ key => {
          setUserKey(key);
        } }
        onKeyUp={ key => {
          setUserKey(null);
        } }
      />

      <PlayerControls
        tempo={ tempo }
        onVirtualKeys={ setVirtualKeys }
        tracks={ tracks }
        onMarkerChange={ setMarker }
      />

      <EditorSection/>
{/*
      <Sequencer
        code={ tracks[currentTrack].code }
        onCodeChange={ newCode => {
          const updatedTracks = tracks;
          updatedTracks[currentTrack].code = newCode;
          updateTracks(updatedTracks);
        } }
        markerConfig={ markerConfig }
      />
      */}
      <SoundPlayer
        playableKeys={ bassKeys }
        playableKeys2={ leadKeys }
        userKey={ userKey }
        virtualKeys={ virtualKeys }
      />
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  addTrack: () => console.log("what")
});

export default connect(mapStateToProps)(App);