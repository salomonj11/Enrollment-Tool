import thunk from 'redux-thunk';
import elCampusReducer from './reducers/elCampusReducer';
import elStudentReducers from './reducers/elStudentReducers';
import { combineReducers, createStore, applyMiddleware } from 'redux';

const rootReducer = combineReducers({
  students: elStudentReducers,
  campuses: elCampusReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
