import { connect } from 'react-redux';
import View from './Note';
import { fetchNotes, addNote, updateNote, setNote } from './_actions';

function mapStateToProps({ notes, note }) {
  return {
    notes,
    note
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNotes: ()=>(dispatch(fetchNotes())),
    addNote: (note)=>(dispatch(addNote(note))),
    setNote: (note)=>(dispatch(setNote(note))),
    updateNote: (id, note)=>(dispatch(updateNote(id, note))),
  };
}

const Note = connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);

export default Note;
