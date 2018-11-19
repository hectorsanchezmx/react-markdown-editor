import { SET_NOTE } from './_types';
import { getNote } from '../../../lib/api';

export function setNote(params) {
  return (
    {
      type: SET_NOTE,
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
