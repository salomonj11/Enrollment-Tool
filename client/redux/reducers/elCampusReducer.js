import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  address: '',
  description: '',
  imageUrl: '',
};

export const myCampusSlice = createSlice({
  name: 'campus',
  reducers: {},
  initialState: {
    value: initialState,
  },
});

export default myCampusSlice.reducer;
