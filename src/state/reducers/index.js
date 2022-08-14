import { combineReducers } from 'redux';
import bankReducer from './bankReducer';
import videosReducer from './videos';

const reducers = combineReducers({
  bank: bankReducer,
  video: videosReducer,
});

export default reducers;
