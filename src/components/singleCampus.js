import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function singleCampusPage() {
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
      <h1>{campus.name}</h1>
      <p>{campus.description}</p>
    </>
  );
}
