import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import { allStudents } from '../client/components/allStudents';
import { allTheCampuses } from '../client/components/allTheCampuses';

function App() {
  const [students, setStudents] = useState([]);
  const [campuses, setCampuses] = useState([]);

  useEffect(() => {
    async function getEverything() {
      const campuses = await Axios.get('/campuses');
      const students = await Axios.get('/students');
      setCampuses(campuses.data);
      setStudents(students.data);
    }
    getEverything();
  }, []);

  return (
    <div>
      <nav>
        <Link to="/campuses">Campuses</Link>
        <Link to="/students">Students</Link>
      </nav>
      <Routes>
        <Route
          path="/students"
          element={<allStudents students={students} />}
        />
        <Route
          path="/campuses"
          element={<allTheCampuses campuses={campuses} />}
        />
      </Routes>
    </div>
  );
}

export default App;
