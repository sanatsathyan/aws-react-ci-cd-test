import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log(process.env);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page deployed from AWS Code pipeline, the environment variable value
          is {process.env.REACT_APP_TEST_KEY}.
        </p>
        <p>Cookie domain is {process.env.REACT_APP_COOKIE_DOMAIN}.</p>
        <p>AWS Test Key is {process.env.AWS_TEST_KEY}.</p>
        <p>Test Key is {process.env.TEST_KEY}.</p>
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
