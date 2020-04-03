import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Sampler from './components/Sampler';
import Sequencer from './components/Sequencer';

function App() {
  const [tempo, setTempo] = useState(120);
  const [virtualKeys, setVirtualKeys] = useState([]);
  const [tracks, updateTracks] = useState([{
    type: "pitch",
    code: "adsfa\nadfa"
  }]);
  return (
    <div className="App">
      <Sampler tempo={tempo} virtualKeys={ virtualKeys }/>
      <Sequencer tempo={tempo} onVirtualKeys={ setVirtualKeys }/>
    </div>
  );
}

export default App;
