export const setUserKeyPressed = (key, isPressed) => ({
  type: "SET_USER_KEY_PRESSED",
  key,
  isPressed
});

export const setScriptKeyPressed = (key, isPressed) => ({
  type: "SET_SCRIPT_KEY_PRESSED",
  key,
  isPressed
});