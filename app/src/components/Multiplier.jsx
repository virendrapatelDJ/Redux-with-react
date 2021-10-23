import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { multiplierActions } from "../store";

export default function Multiplier() {
  const result = useSelector((state) => state.multiplier.result);
  const dispatch = useDispatch();

  const multiply = (value) => {
    console.log({ value });
    dispatch({ type: multiplierActions.MULTIPLY, payload: value });
  };

  const reset = () => {
    dispatch({ type: multiplierActions.RESET });
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
            <button
              onClick={() => multiply(2)}
              className="btn btn-success btn-lg m-3"
            >
              Multiply By 2
            </button>
            <button
              onClick={() => multiply(5)}
              className="btn btn-success btn-lg m-3"
            >
              Multiply By 5
            </button>
            <button onClick={reset} className="btn btn-primary btn-lg m-3">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
