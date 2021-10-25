import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { studentActions } from "../store";

export default function Students() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.data);

  console.log(students);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => {
        dispatch(studentActions.saveAllStudents(data.data));
      });
  }, []);

  const handleDelete = (student) => {
    console.log(student);
  };

  return (
    <div className="container mt-4">
      <h1 className="display-3">Redux Students</h1>
      <hr />
      <table class="table">
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
        <tbody>
          {students &&
            students.map((student, index) => (
              <tr key={index}>
                <td scope="row">{index}</td>
                <td>
                  <img
                    style={{ width: 70, borderRadius: 40 }}
                    src={student.avatar}
                    alt=""
                    srcset=""
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
      </table>
    </div>
  );
}
