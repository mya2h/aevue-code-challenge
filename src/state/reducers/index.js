import { combineReducers } from 'redux';
import videosReducer from './videos';

const reducers = combineReducers({
  video: videosReducer,
});

export default reducers;
