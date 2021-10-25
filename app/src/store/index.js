import { createSlice, configureStore } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "students",
  initialState: { data: [] },
  reducers: {
    saveAllStudents(state, action) {
      state.data = action.payload;
    },
    addMoreStudents(state, action) {
      state.data = [...action.payload, ...state.data];
    },
    deleteStudent(state, action) {
      const id = action.payload.id;
      const students = state.data;
      const index = students.findIndex((student) => student.id === id);
      students.splice(index, 1);
    },
  },
});

const store = configureStore({
  devTools: true,
  reducer: {
    students: studentSlice.reducer,
  },
});

export const studentActions = studentSlice.actions;

export { store };
