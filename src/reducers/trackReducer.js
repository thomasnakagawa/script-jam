export default (state = [{ code: "wowzer default" }], action) => {
  switch (action.type) {
		case 'ADD_TRACK':
			return [
				...state,
				{
					code: "default code!"
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
						lineHighlight: action.lineHighlight,
						charHighlight: action.charHighlight
					}
				}
			});
		default:
			return state
  }
}