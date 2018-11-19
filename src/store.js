import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

// Reducers from ./components/COMPONENT_NAME
import { notes, note } from './components/pages/Note/_reducers';

const reducers = combineReducers({
  // Add reducers here:
  notes,
  note,
});
const Store = createStore(reducers, applyMiddleware(thunk));

export default Store;
