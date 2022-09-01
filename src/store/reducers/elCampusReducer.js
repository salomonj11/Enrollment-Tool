import axios from 'axios';

const SET_CAMPUSES = 'SET_CAMPUSES';
const CREATE_ONE_CAMPUS = 'CREATE_ONE_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

export const elSetCampuses = (campuses) => {
  return {
    type: SET_CAMPUSES,
    campuses,
  };
};

export const elCreateOneCampus = (campus) => {
  return {
    type: CREATE_ONE_CAMPUS,
    campus,
  };
};

export const elUpdateCampus = (campus) => ({
  type: UPDATE_CAMPUS,
  campus,
});

export const elDeleteCampus = (id) => ({
  type: DELETE_CAMPUS,
  id,
});
