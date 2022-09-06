import thunk from 'redux-thunk';
import CampusReducer from './reducers/CampusReducer';
import StudentReducer from './reducers/StudentReducer';
import { combineReducers, createStore, applyMiddleware } from 'redux';

const rootReducer = combineReducers({
  students: StudentReducer,
  campuses: CampusReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
