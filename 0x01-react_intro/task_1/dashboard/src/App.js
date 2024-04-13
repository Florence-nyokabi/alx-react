import logo from "./holberton-logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
      </div>
    </div>
  );
}

export default App;
