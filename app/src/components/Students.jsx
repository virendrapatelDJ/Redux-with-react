import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { studentSagaActions } from "../store/sagas/students";

function StudentTableHeader() {
  return (
    <thead>
      <tr>
        <th>Sno</th>
        <th>Image</th>
        <th>First Name</th>
        <th>Email</th>
        <th>Last name</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
}
function StudentTableBody({ students, onDelete: handleDelete }) {
  return (
    <tbody>
      {students &&
        students.map((student, index) => (
          <tr key={index}>
            <td scope="row">{index + 1}</td>
            <td className="text-center">
              <img
                style={{ width: 70, borderRadius: 40 }}
                src={student.avatar}
              />
            </td>
            <td>{student.first_name}</td>
            <td>{student.last_name}</td>
            <td>{student.email}</td>
            <td>
              <button
                onClick={() => handleDelete(student)}
                className=" btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
    </tbody>
  );
}

export default function Students() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.data);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    console.log("Fetch Data - 1");
    dispatch({ type: studentSagaActions.FETCH_USERS });
    setPage(page + 1);
  }

  const handleDelete = (student) => {
    dispatch({ type: studentSagaActions.DELETE_USER, payload: student });
  };
  const handleAddMore = () => {
    dispatch({
      type: studentSagaActions.FETCH_MORE_USERS,
      payload: { page },
    });
    setPage(page + 1);
  };
  const handleReset = () => {
    dispatch({ type: studentSagaActions.RESET_USERS });
    setPage(1);
  };

  return (
    <div className="container mt-4">
      <h1 className="display-3">Redux Students</h1>
      <hr />
      <div className="mt-3">
        <button className="btn btn-success me-4" onClick={handleAddMore}>
          Add More
        </button>
        <button className="btn btn-success me-4" onClick={handleReset}>
          Reset
        </button>
      </div>
      <hr />
      {students?.length ? (
        <table className="table table-bordered text-center ">
          <StudentTableHeader />
          <StudentTableBody students={students} onDelete={handleDelete} />
        </table>
      ) : (
        <p className="display-3 p-3 m-3 rounded shadow text-center">
          No Students
        </p>
      )}
    </div>
  );
}
