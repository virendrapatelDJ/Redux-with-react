import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Students from "./components/Students";

function App() {
  return (
    <Provider store={store}>
      <Students />
    </Provider>
  );
}

export default App;
