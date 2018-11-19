import { SET_NOTES } from './_types';
import { getNotes } from '../../../lib/api';

export function setNotes(params) {
  return (
    {
      type: SET_NOTES,
      payload: params,
    }
  );
}


export function fetchPosts(agentId) {
  return (dispatch) => {
    getRequest(agentId).then((result) => {
      dispatch(setPosts(result));
    });
  };
}
