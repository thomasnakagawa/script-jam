import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import trackReducer from './trackReducer';
import playback from './playback';
import keys from './keys';

export default combineReducers({
  simpleReducer,
  trackReducer,
  playback,
  keys
});
