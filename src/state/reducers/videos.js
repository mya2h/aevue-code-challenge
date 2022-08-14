/* eslint-disable default-param-last */
import { GET_VIDEOS_SUCCESS, GET_VIDEOS_FAIL } from '../action-creator/actionTypes';

const initialState = {
  videos: [],
  loading: true,
};

const reducer = (
  state = initialState,
  action,
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_VIDEOS_SUCCESS: {
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    }
    case GET_VIDEOS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
