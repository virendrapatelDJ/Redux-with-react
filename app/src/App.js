import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import { store } from "./store";
import CounterClassBased from "./components/CounterClassBased";
import Multiplier from "./components/Multiplier";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <div className="mt-3">
          <Counter />
        </div>
        <div className="mt-3">
          <CounterClassBased />
        </div>
        <div className="mt-3">
          <Multiplier />
        </div>
      </div>
    </Provider>
  );
}

export default App;
