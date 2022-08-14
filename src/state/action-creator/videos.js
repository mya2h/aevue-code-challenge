import axios from 'axios';
import { GET_VIDEOS_SUCCESS, GET_VIDEOS_FAIL } from './actionTypes';

export const getVideos = () => async (dispatch) => {
  // const file = [
  //   {
  //     name: 'kal',
  //   },
  // ];
  try {
    const response = await axios.get('videos.json');
    dispatch({
      type: GET_VIDEOS_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_VIDEOS_FAIL,
    });
  }
};
export const addNewVideos = async () => null;
