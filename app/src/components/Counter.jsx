import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";

export default function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log({ counter });
  }, []);

  const increase = (value) => {
    console.log({ value });
    dispatch(counterActions.increase(value));
  };
  const decrease = (value) => {
    console.log({ value });
    dispatch(counterActions.decrease(value));
  };

  return (
    <div className="container mt-4 p-4">
      <div className="shadow rounded p-4 m-4">
        <div className=" text-center">
          <p className="display-6">Redux Counter</p>
          <p>Function Based Component</p>
        </div>
        <hr />
        <div className="counter text-center">
          <h1 className=" col-4 mx-auto p-4 rounded display-1">{counter}</h1>
          <hr />

          <div className="flex justify-content-center mx-auto">
            {new Array(10).fill().map((_, index) => (
              <button
                onClick={() => increase(index + 1)}
                className="btn btn-success btn-sm m-1"
              >
                + {index + 1}
              </button>
            ))}
          </div>
          <div className="flex justify-content-center mx-auto">
            {new Array(10).fill().map((_, index) => (
              <button
                onClick={() => decrease(index + 1)}
                className="btn btn-danger btn-sm m-1"
              >
                - {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
