import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

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
      (campus) => !checkHasStudents(campus, students)
    );
  }

  useEffect(() => {
    !check ? setCampusShown(campuses) : setCampusShown(secondFilter);
  }, [check, campuses, students]);



  return (
    
  )









}

export default AllCampuses;
