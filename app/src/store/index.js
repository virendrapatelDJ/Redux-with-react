import { createSlice, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { studentSaga } from "./sagas/students";

const studentSlice = createSlice({
  name: "students",
  initialState: { data: [] },
  reducers: {
    saveAllStudents(state, action) {
      console.log("Fetch Data - 5");
      state.data = action.payload;
    },
    addMoreStudents(state, action) {
      state.data = [...action.payload, ...state.data];
    },
    reset(state, action) {
      state.data = [];
    },
    deleteStudent(state, action) {
      const id = action.payload.id;
      const students = state.data;
      const index = students.findIndex((student) => student.id === id);
      students.splice(index, 1);
    },
  },
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  devTools: true,
  middleware: [sagaMiddleware],
  reducer: {
    students: studentSlice.reducer,
  },
});

sagaMiddleware.run(studentSaga);

export { store, studentSlice };
