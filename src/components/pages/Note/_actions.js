import { notesRef } from "../../../lib/firebase";
import { SET_NOTES, SET_NOTE } from './_types';

export function setNote(params) {
  return (
    {
      type: SET_NOTE,
      payload: params,
    }
  );
}

export const addNote = newNote => async dispatch => {
  console.log('newNote', newNote)
  notesRef.push().set(newNote);
};

export const updateNote = (id, note) => async dispatch => {
  notesRef.child(id).set(note);
};

export const fetchNotes = () => async dispatch => {
  notesRef.on('value', snapshot => {
    console.log('snapshot.val()', snapshot.val())
    dispatch({
      type: SET_NOTES,
      payload: snapshot.val()
    });
  });
};