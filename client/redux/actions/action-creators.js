import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_ONE_CAMPUS = 'GET_ONE_CAMPUS';
const ADD_CAMPUS = 'ADD_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

export const getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses,
  };
};

export const getOneCampus = (campus) => {
  return {
    type: GET_ONE_CAMPUS,
    campus,
  };
};

export const addCampus = (campus) => ({
  type: ADD_CAMPUS,
  campus,
});

export const deleteCampus = (id) => ({
  type: DELETE_CAMPUS,
  id,
});
