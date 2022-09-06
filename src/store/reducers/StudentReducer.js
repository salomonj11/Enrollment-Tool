import axios from 'axios';

const SET_STUDENTS = 'SET_STUDENTS';
const CREATE_ONE_STUDENT = 'CREATE_ONE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';

const elSetStudents = (students) => {
  return {
    type: SET_STUDENTS,
    students,
  };
};

const elCreateOneStudent = (student) => {
  return {
    type: CREATE_ONE_STUDENT,
    student,
  };
};

const elUpdateStudent = (student) => {
  return {
    type: UPDATE_STUDENT,
    student,
  };
};

const elDeleteStudent = (student) => {
  return {
    type: DELETE_STUDENT,
    student,
  };
};

//export stuff below //

function StudentReducer(state = [], action) {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    case CREATE_ONE_STUDENT:
      return [...state, action.student];
    case UPDATE_STUDENT:
      return state.map((student) => {
        return student.id === action.student.id
          ? action.student
          : student;
      });
    case DELETE_STUDENT:
      return state.filter(
        (student) => student.id !== action.student.id
      );
    default:
      return state;
  }
}

export const deleteStudent = (student) => {
  return async (dispatch) => {
    const { data: deleted } = await axios.delete(
      `/api/students/${student.id}`
    );
    dispatch(elDeleteStudent(deleted));
  };
};

export const updateStudent = (student) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put(
      `/api/students/${student.id}`,
      student
    );
    dispatch(elUpdateStudent(updated));
  };
};

export const createOneStudent = (student) => {
  return async (dispatch) => {
    const { data: created } = await axios.post(
      '/api/students',
      student
    );
    dispatch(elCreateOneStudent(created));
  };
};

export const getStudents = () => {
  return async (dispatch) => {
    const { data: students } = await axios.get('/api/students');
    dispatch(elSetStudents(students));
  };
};

export default StudentReducer;
