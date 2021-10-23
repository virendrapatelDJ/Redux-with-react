import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/actions";

export default function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log({ counter });
  }, []);

  const increase = (value) => {
    console.log({ value });
    dispatch({ type: counterActions.INCREMENT, payload: value });
  };
  const decrease = (value) => {
    console.log({ value });
    dispatch({ type: counterActions.DECREMENT, payload: value });
  };

  return (
    <div className="container mt-4 p-4">
      <div className="shadow rounded p-4 m-4">
        <p className="display-6 text-center">Function Based Component</p>
        <hr />
        <div className="counter text-center">
          <h1 className=" col-4 mx-auto p-4 rounded display-1">{counter}</h1>
          <hr />

          <div className="flex justify-content-center mx-auto">
            <button
              onClick={() => increase(1)}
              className="btn btn-success btn-lg m-3"
            >
              Increment By 1
            </button>
            <button
              onClick={() => increase(5)}
              className="btn btn-success btn-lg m-3"
            >
              Increase By 5
            </button>
            {counter > 0 && (
              <Fragment>
                <button
                  onClick={() => decrease(5)}
                  className="btn btn-danger btn-lg m-3"
                >
                  Decrease By 5
                </button>
                <button
                  onClick={() => decrease(1)}
                  className="btn btn-danger btn-lg m-3"
                >
                  Decrement By 1
                </button>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
