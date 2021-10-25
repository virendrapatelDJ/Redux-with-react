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

const store = configureStore({
  devTools: true,
  reducer: {
    students: studentSlice.reducer,
  },
});

function fetchStudents(page, per_page = 2) {
  return (dispatch) => {
    fetch(`https://reqres.in/api/users?per_page=${per_page}&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(studentSlice.actions.saveAllStudents(data.data));
      });
  };
}
function addMoreStudents(page, per_page = 2) {
  return (dispatch) => {
    fetch(`https://reqres.in/api/users?per_page=${per_page}&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(studentSlice.actions.addMoreStudents(data.data));
      });
  };
}
function deleteStudent(student) {
  return (dispatch) => {
    dispatch(studentSlice.actions.deleteStudent(student));
  };
}
function resetStudents() {
  return (dispatch) => {
    dispatch(studentSlice.actions.reset());
  };
}

const actions = {
  fetchStudents,
  addMoreStudents,
  deleteStudent,
  resetStudents,
};

export { store, actions };
