import GetAPresetTrack from '../Music';

export default (state = [{ code: GetAPresetTrack() }], action) => {
  switch (action.type) {
    case 'ADD_TRACK':
      return [
        ...state,
        {
          code: GetAPresetTrack()
        }
      ];
    case 'REMOVE_TRACK':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case 'EDIT_TRACK_CODE':
      return state.map((track, index) => {
        if (index === action.index) {
          return {
            ...track,
            code: action.newCode
          }
        }
        return track;
      });
    case 'EDIT_TRACK_CURSOR':
      return state.map((track, index) => {
        if (index === action.index) {
          return {
            ...track,
            showHighlight: action.showHighlight,
            lineHighlight: action.lineHighlight,
            charHighlight: action.charHighlight
          }
        }
        return track;
      });
    default:
      return state
  }
}