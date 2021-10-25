import { put, takeEvery } from "redux-saga/effects";
import { studentSlice } from "../index";
function* fetchStudents(action) {
  const { page, per_page = 2 } = action.payload || {};
  console.log("Fetch Data - 2");
  const response = yield fetch(
    `https://reqres.in/api/users?per_page=${per_page}&page=${page}`
  );
  console.log("Fetch Data - 3");
  const json = yield response.json();
  console.log("Fetch Data - 4");
  yield put(studentSlice.actions.saveAllStudents(json.data));
}
function* fetchMoreStudents(action) {
  const { page, per_page = 2 } = action.payload || {};

  const response = yield fetch(
    `https://reqres.in/api/users?per_page=${per_page}&page=${page}`
  );
  const json = yield response.json();
  yield put(studentSlice.actions.addMoreStudents(json.data));
}
function* deleteStudent(action) {
  const { payload: student } = action;
  yield put(studentSlice.actions.deleteStudent(student));
}
function* reset() {
  yield put(studentSlice.actions.reset());
}

const studentSagaActions = {
  FETCH_USERS: "fetch_user_requested",
  FETCH_MORE_USERS: "fetch_more_users",
  DELETE_USER: "delete_user",
  RESET_USERS: "reset_USERS",
};
function* studentSaga() {
  yield takeEvery(studentSagaActions.FETCH_USERS, fetchStudents);
  yield takeEvery(studentSagaActions.FETCH_MORE_USERS, fetchMoreStudents);
  yield takeEvery(studentSagaActions.DELETE_USER, deleteStudent);
  yield takeEvery(studentSagaActions.RESET_USERS, reset);
}

export { studentSaga, studentSagaActions };
