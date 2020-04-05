import React, { useState } from 'react';

export default function EditorSection(props) {
  [tracks, changeTracks] = useState([{ code: "hello\nworld" }]);

  return (
    <div className="editor-section">
      <div className="editor-section-header">
        <button>Add track</button>
      </div>
    </div>
  );
}