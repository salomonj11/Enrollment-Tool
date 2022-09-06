import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CampusForm from './CampusForm';
import { deleteCampus } from '../store/reducers/campusReducer';

function hasStudents(campus, students) {
  return students.find((student) => student.campusId === campus.id);
}

function AllCampuses() {
  const students = useSelector((state) => state.students);
  const campuses = useSelector((state) => state.campuses);
  const dispatch = useDispatch();

  const [check, setCheck] = useState(false);
  const [campusShown, setCampusShown] = useState(campuses);

  function myFilter() {
    setCheck(!check);
  }

  function secondFilter() {
    return campuses.filter(
      (campus) => !hasStudents(campus, students)
    );
  }

  useEffect(() => {
    !check ? setCampusShown(campuses) : setCampusShown(secondFilter);
  }, [check, campuses, students]);

  return (
    <main>
      <div className="list flex-column">
        {campusShown.map((campus) => {
          let enrollments = students.filter(
            (student) => student?.campusId === campus.id
          ).length;

          return (
            <div className="list-item" key={campus.id}>
              <h2>
                <Link to={`/campuses/${campus.id}`}>
                  {campus.name}
                </Link>
              </h2>
              <h3>
                {enrollments}
                {!enrollments || enrollments > 1
                  ? ' Enrollments'
                  : ' Enrollment'}
              </h3>
              <p>{campus.description} </p>
              <button onClick={() => dispatch(deleteCampus(campus))}>
                Delete School
              </button>
            </div>
          );
        })}
      </div>
      <CampusForm />
    </main>
  );
}

export default AllCampuses;
