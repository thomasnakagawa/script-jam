import React from 'react';
import { connect } from 'react-redux';
import { addTrack, removeTrack, editTrackCode } from '../actions/trackActions';
import TextEditor from './TextEditor';

function EditorSection(props) {
  return (
    <div className="editor-section">
      <div className="editor-section-header">
        <button onClick={ props.addTrack }>Add track</button>
      </div>
      <div className="editor-sections-tabs">
        {
          (props.tracks || []).map((track, trackIndex) => (
            <TextEditor
              key={ trackIndex }
              onCloseButtonClicked={ () => props.removeTrack(trackIndex) }
              code={ track.code }
              onCodeChanged={ newCode => props.editTrackCode(trackIndex, newCode) }
              lineHighlight={ track.lineHighlight }
              charHighlight={ track.charHighlight }
            />
          ))
        }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  tracks: state.trackReducer
});

const mapDispatchToProps = dispatch => ({
  addTrack: () => dispatch(addTrack()),
  removeTrack: index => dispatch(removeTrack(index)),
  editTrackCode: (index, code) => dispatch(editTrackCode(index, code))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorSection);