import { SET_NOTES } from './_types';

function notes(state = [], { type, payload }) {
  switch (type) {
    case SET_NOTES:
      return payload;
    default:
      return state;
  }
}

export { notes };
