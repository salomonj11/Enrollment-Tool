import axios from 'axios';

const SET_CAMPUSES = 'SET_CAMPUSES';
const CREATE_ONE_CAMPUS = 'CREATE_ONE_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

const _setCampuses = (campuses) => {
  return {
    type: SET_CAMPUSES,
    campuses,
  };
};

const elCreateOneCampus = (campus) => {
  return {
    type: CREATE_ONE_CAMPUS,
    campus,
  };
};

const elUpdateCampus = (campus) => {
  return {
    type: UPDATE_CAMPUS,
    campus,
  };
};

const elDeleteCampus = (campus) => {
  return {
    type: DELETE_CAMPUS,
    campus,
  };
};

//export stuff below //

function CampusReducer(state = [], action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    case CREATE_ONE_CAMPUS:
      return [...state, action.campus];
    case UPDATE_CAMPUS:
      return state.map((campus) => {
        return campus.id === action.campus.id
          ? action.campus
          : campus;
      });
    case DELETE_CAMPUS:
      return state.filter((campus) => campus.id !== action.campus.id);
    default:
      return state;
  }
}

export const deleteCampus = (campus) => {
  return async (dispatch) => {
    const { data: deleted } = await axios.delete(
      `/api/campuses/${campus.id}`
    );
    dispatch(elDeleteCampus(deleted));
  };
};

export const updateCampus = (campus) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put(
      `/api/campuses/${campus.id}`,
      campus
    );
    dispatch(elUpdateCampus(updated));
  };
};

export const createOneCampus = (campus) => {
  return async (dispatch) => {
    const { data: created } = await axios.post(
      '/api/campuses',
      campus
    );
    dispatch(elCreateOneCampus(created));
  };
};

export const getCampuses = () => {
  return async (dispatch) => {
    const { data: campuses } = await axios.get('/api/campuses');
    dispatch(_setCampuses(campuses));
  };
};

export default CampusReducer;
