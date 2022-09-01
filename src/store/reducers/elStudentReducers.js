import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  gpa: '',
  imageUrl: '',
};

export const myStudentsSlice = createSlice({
  name: 'campus',
  reducers: {},
  initialState: {
    value: initialState,
  },
});

export default myStudentsSlice.reducer;
