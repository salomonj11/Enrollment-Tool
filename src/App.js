import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Home,
  Nav,
  AllCampuses,
  AllStudents,
  SingleCampusPage,
  SingleStudentPage,
} from './components';
import { getCampuses } from './store/reducers/CampusReducer';
import { getStudents } from './store/reducers/StudentReducer';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  //Load campuses and students on app load
  useEffect(() => {
    dispatch(getCampuses());
    dispatch(getStudents());
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="campuses" element={<AllCampuses />} />
        <Route path="students" element={<AllStudents />} />
        <Route
          path="campuses/:campusId"
          element={<SingleCampusPage />}
        />
        <Route
          path="students/:studentId"
          element={<SingleStudentPage />}
        />
      </Routes>
    </>
  );
}

export default App;
