import { SET_NOTE } from './_types';

function note(state = {}, { type, payload }) {
  switch (type) {
    case SET_NOTE:
      return payload;
    default:
      return state;
  }
}

export { note };
