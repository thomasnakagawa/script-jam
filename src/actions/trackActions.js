export const addTrack = () => ({
  type: 'ADD_TRACK'
});

export const removeTrack = index => ({
  type: 'REMOVE_TRACK',
  index
});

export const editTrackCode = (index, newCode)=> ({
  type: 'EDIT_TRACK_CODE',
  index,
  newCode
});

export const editTrackCursor = (index, line, char)=> ({
  type: 'EDIT_TRACK_CURSOR',
  index,
  lineHighlight: line,
  charHighlight: char
});