import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CampusForm from './CampusForm';

function SingleCampusPage() {
  const students = useSelector((state) => state.students);
  const campuses = useSelector((state) => state.campuses);
  const dispatch = useDispatch();
  const params = useParams();

  const [campus, setCampus] = useState({
    name: '',
    students: [],
    description: '',
    address: '',
    imageUrl: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const singleCampusData = await axios.get(
        `/api/campuses/${params.campusId}`
      );
      setCampus({ ...singleCampusData.data });
    };
    fetchData();
  }, [campuses, students]);

  return (
    <>
      <section className="oneCampus-header">
        <div className="mainInformation flex-column center">
          <h1>{campus.name}</h1>
          <p>{campus.description}</p>
        </div>
        <img src={campus.imageUrl} />
      </section>

      <div className="enrollees flex-column">
        <h2> Students:</h2>
        <div className="student-list flex-row center">
          {campus.students.length
            ? campus.students.map((student) => {
                return (
                  <h3 key={student.id}>
                    <Link to={`/students/${student.id}`}>
                      {student.lastName}, {student.firstName}
                    </Link>
                  </h3>
                );
              })
            : 'No students :('}
        </div>
      </div>
      <CampusForm />
    </>
  );
}

export default SingleCampusPage;
