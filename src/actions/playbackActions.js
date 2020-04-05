export const startPlayback = () => ({
  type: 'START_PLAYBACK'
});

export const stopPlayback = () => ({
  type: 'STOP_PLAYBACK'
});

export const setTempo = tempo => ({
  type: 'SET_TEMPO',
  tempo
});

export const setTrackPlayingLine = (trackIndex, line) => ({
  type: "SET_TRACK_PLAYING_LINE",
  trackIndex,
  line
});
