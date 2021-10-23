import { Component } from "react";
import { connect } from "react-redux";
import { counterActions } from "../store/actions";

class CounterClassBased extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container mt-4 p-4">
        <div className="shadow rounded p-4 m-4">
          <p className="display-6 text-center">Class Based Component</p>
          <hr />
          <div className="counter text-center">
            <h1 className=" col-4 mx-auto p-4 rounded display-1">
              {this.props.counter}
            </h1>
            <hr />

            <div className="flex justify-content-center mx-auto">
              <button
                onClick={() => this.props.increase(1)}
                className="btn btn-success btn-lg m-3"
              >
                Increment By 1
              </button>
              <button
                onClick={() => this.props.increase(5)}
                className="btn btn-success btn-lg m-3"
              >
                Increase By 5
              </button>
              <button
                onClick={() => this.props.decrease(5)}
                className="btn btn-danger btn-lg m-3"
              >
                Decrease By 5
              </button>
              <button
                onClick={() => this.props.decrease(1)}
                className="btn btn-danger btn-lg m-3"
              >
                Decrement By 1
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log({ dispatch });

  return {
    increase: (value) =>
      dispatch({ type: counterActions.INCREMENT, payload: value }),
    decrease: (value) =>
      dispatch({ type: counterActions.DECREMENT, payload: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClassBased);
