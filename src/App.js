import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page deployed from AWS Code pipeline, the environment variables value
          is {process.env.REACT_APP_TEST_KEY}.
        </p>
        <p>
          Cookie domain is{" "}
          {process.env.REACT_APP_BOOLEAN_VALUE &&
          process.env.REACT_APP_BOOLEAN_VALUE.toLocaleLowerCase() === "true"
            ? true
            : false}
          .
        </p>
        <p>AWS Test Key is {process.env.AWS_TEST_KEY}.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
