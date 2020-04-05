import React from 'react';

import './App.css';
import './style';

import HeaderSection from './components/HeaderSection';
import KeysSection from './components/KeysSection';
import UserKeyDetector from './components/UserKeyDetector';
import EditorSection from './components/EditorSection';
import PlaybackParser from './components/PlaybackParser';

function App(props) {
  return (
    <div className="App">
      <HeaderSection />
      <KeysSection/>
      <EditorSection/>

      <UserKeyDetector/>
      <PlaybackParser/>

    {/*}
      <pre style={{ position: "absolute", bottom: "0", zIndex: "5", maxWidth: "100%", textAlign: "left" }}>
      {
        JSON.stringify(props, null, 2)
      }
      </pre>
    */}
    </div>
  );
}

export default App;
