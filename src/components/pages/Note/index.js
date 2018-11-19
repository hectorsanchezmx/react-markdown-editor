import { connect } from 'react-redux';
import View from './Note';

function mapStateToProps({ assignedLeads, assignedTasks }) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

const Note = connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);

export default Note;
