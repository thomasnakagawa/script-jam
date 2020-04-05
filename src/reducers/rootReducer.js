import { combineReducers } from 'redux';
import tracks from './tracks';
import playback from './playback';
import keys from './keys';

export default combineReducers({
  tracks,
  playback,
  keys
});
