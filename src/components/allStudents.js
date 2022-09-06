import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import StudentForm from './StudentForm';
import { deleteStudent } from '../store/reducers/studentReducer';
function hasStudents(campus, students) {
  return students.find((student) => student.campusId === campus.id);
}

function AllStudents() {
  const students = useSelector((state) => state.students);
  const campuses = useSelector((state) => state.campuses);
  const dispatch = useDispatch();

  const [check, setCheck] = useState(false);
  const [studentsShown, setStudentsShown] = useState(students);

  function myFilter() {
    setCheck(!check);
  }

  function secondFilter() {
    return students.filter((student) => !student.campusId);
  }

  useEffect(() => {
    !check
      ? setStudentsShown(students)
      : setStudentsShown(secondFilter);
  }, [check, campuses, students]);

  return (
    <main>
      <div className="list flex-column">
        {studentsShown.map((student) => {
          const studentCampus = campuses.find(
            (campus) => campus.id === student.campusId
          );

          return (
            <div className="list-item" key={student.id}>
              <h2>
                <Link to={`/students/${student.id}`}>
                  {student.lastName}, {student.firstName}
                </Link>{' '}
              </h2>
              <h3>{student.email}</h3>
              <p>
                Attends:{' '}
                {studentCampus
                  ? studentCampus.name
                  : '(student is not enrolled)'}
              </p>
              <button
                onClick={() => dispatch(deleteStudent(student))}
              >
                Delete Student
              </button>
            </div>
          );
        })}
      </div>
      <StudentForm />
    </main>
  );
}

export default AllStudents;
