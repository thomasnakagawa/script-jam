export default (state={ isPlaying: false, tempo: 120, trackPlayLine: {} }, action) => {
  switch (action.type) {
    case "START_PLAYBACK":
      return {
        ...state,
        isPlaying: true
      };
    case "STOP_PLAYBACK":
      return {
        ...state,
        isPlaying: false,
        trackPlayLine: {}
      };
    case "SET_TEMPO":
      return {
        ...state,
        tempo: action.tempo
      };
    case 'SET_TRACK_PLAYING_LINE':
      return {
        ...state,
        trackPlayLine: {
          ...state.trackPlayLine,
          [action.trackIndex]: action.line
        }
      };
    default:
      return state;
  }
};