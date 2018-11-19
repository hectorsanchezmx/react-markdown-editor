import { SET_NOTES, SET_NOTE } from './_types';

function notes(state = [], { type, payload }) {
  switch (type) {
    case SET_NOTES:
      return payload;
    default:
      return state;
  }
};

function note(state = {}, { type, payload }) {
  switch (type) {
    case SET_NOTE:
      return payload;
    default:
      return state;
  }
}

export { notes, note };
