import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../../client/redux/reducers/elStudentReducers';
import campusReducer from '../../client/redux/reducers/elCampusReducer';
import reduxLogger from 'redux-logger';

const mainStore = configureStore({
  reducer: {
    student: studentReducer,
    campus: campusReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(reduxLogger);
  },
});

export default mainStore;
