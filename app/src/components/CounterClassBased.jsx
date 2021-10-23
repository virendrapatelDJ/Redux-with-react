import { Component } from "react";
import { connect } from "react-redux";
import { counterActions } from "../store";

class CounterClassBased extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container mt-4 p-4">
        <div className="shadow rounded p-4 m-4">
          <div className=" text-center">
            <p className="display-6">Redux Counter</p>
            <p>Class Based Component</p>
          </div>
          <hr />
          <div className="counter text-center">
            <h1 className="col-4 mx-auto rounded display-1">
              {this.props.counter}
            </h1>
            <hr />

            <div className="flex justify-content-center mx-auto">
              <div className="flex justify-content-center mx-auto">
                {new Array(10).fill().map((_, index) => (
                  <button
                    onClick={() => this.props.increase(index + 1)}
                    className="btn btn-success btn-sm m-1"
                  >
                    + {index + 1}
                  </button>
                ))}
              </div>
              <div className="flex justify-content-center mx-auto">
                {new Array(10).fill().map((_, index) => (
                  <button
                    onClick={() => this.props.decrease(index + 1)}
                    className="btn btn-danger btn-sm m-1"
                  >
                    - {index + 1}
                  </button>
                ))}
              </div>
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
    increase: (value) => dispatch(counterActions.increase(value)),
    decrease: (value) => dispatch(counterActions.decrease(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClassBased);
