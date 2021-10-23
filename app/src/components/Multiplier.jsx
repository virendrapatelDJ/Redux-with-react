import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { multiplierActions } from "../store";

export default function Multiplier() {
  const result = useSelector((state) => state.multiplier.result);
  const dispatch = useDispatch();
  const { multiply: multiplyAction, reset: resetAction } = multiplierActions;

  const multiply = (value) => {
    console.log({ value });
    dispatch(multiplyAction(value));
  };

  const reset = () => {
    dispatch(resetAction());
  };

  return (
    <div className="container mt-4 p-4">
      <div className="shadow rounded p-4 m-4">
        <p className="display-6 text-center">Multiplier</p>
        <hr />
        <div className="counter text-center">
          <h1 className=" col-4 mx-auto p-4 rounded display-1">{result}</h1>
          <hr />

          <div className="flex justify-content-center mx-auto">
            {new Array(10).fill().map((_, index) => (
              <button
                onClick={() => multiply(index + 1)}
                className="btn btn-primary btn-sm m-1"
              >
                * {index + 1}
              </button>
            ))}
          </div>
          <div className="flex justify-content-center mx-auto">
            <button
              onClick={() => reset()}
              className="btn btn-success btn-sm m-1"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
