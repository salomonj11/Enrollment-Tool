import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import StudentForm from './StudentForm';
import { useSelector } from 'react-redux';

const schoolLink = (student) => {
  student.campusId ? (
    <Link to={`/campuses/${student.campusId}`}>
      {student.campus.name}
    </Link>
  ) : (
    'Student not registered'
  );
};

const SingleStudentPage = () => {
  const students = useSelector((state) => state.students);
  const params = useParams();

  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gpa: null,
    imageUrl: null,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const studentData = await axios.get(
        `/api/students/${params.studentId}`
      );
      setStudent({ ...studentData.data });
      setLoading(false);
    };
    getData();
  }, [students]);

  return (
    <div className="single-page flex-column center">
      {loading ? (
        <h1>Loading Student...</h1>
      ) : (
        <>
          <section className="single-header">
            <div className="info flex-column center">
              <h1>
                {student.lastName}, {student.firstName}
              </h1>
              <p>
                {student.email ? student.email : 'No email on file'}
              </p>
              <p>
                GPA: {student.gpa ? student.gpa : 'No GPA on file'}
              </p>
              <h2>{schoolLink(student)}</h2>
            </div>
            <img src={student.imageUrl} alt="student photo" />
          </section>
          <StudentForm />
        </>
      )}
    </div>
  );
};

export default SingleStudentPage;
