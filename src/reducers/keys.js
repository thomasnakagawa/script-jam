export default (state={ userKeys: {}, scriptKeys: {} }, action) => {
  switch (action.type) {
    case "SET_USER_KEY_PRESSED":
      return {
        ...state,
        userKeys: {
          ...state.userKeys,
          [action.key]: action.isPressed
        }
      };
    case "SET_SCRIPT_KEY_PRESSED":
      return {
        ...state,
        scriptKeys: {
          ...state.scriptKeys,
          [action.key]: action.isPressed
        }
      };
    case "CLEAR_PRESSED_KEYS":
      return {
        userKeys: {},
        scriptKeys: {}
      };
    default:
      return state;
  }
};