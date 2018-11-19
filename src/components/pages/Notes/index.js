import { connect } from 'react-redux';
import { fetchAssignedLeads, fetchAssignedTasks, updateTask } from './_actions';
import View from './Notes';

function mapStateToProps({ assignedLeads, assignedTasks }) {
  return {
    assignedLeads: assignedLeads ? assignedLeads.assignedLeads : [],
    assignedTasks: assignedTasks ? assignedTasks.assignedTasks : [],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAssignedLeads: agentId => dispatch(fetchAssignedLeads(agentId)),
    getAssignedTasks: agentId => dispatch(fetchAssignedTasks(agentId)),
    updateTask: (task, status) => dispatch(updateTask(task, status)),
  };
}

const Notes = connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);

export default Notes;
