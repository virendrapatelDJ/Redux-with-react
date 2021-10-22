import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import { store } from "./store";
import CounterClassBased from "./components/CounterClassBased";

function App() {
  return (
    <Provider store={store}>
      <div className="row">
        <div className="col">
          <Counter />
        </div>
        <div className="col">
          <CounterClassBased />
        </div>
      </div>
    </Provider>
  );
}

export default App;
