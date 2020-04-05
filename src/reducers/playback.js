export default (state={ isPlaying: false }, action) => {
  switch (action.type) {
    case "START_PLAYBACK":
      return {
        ...state,
        isPlaying: true
      };
    case "STOP_PLAYBACK":
      return {
        ...state,
        isPlaying: false
      };
    default:
      return state;
  }
};