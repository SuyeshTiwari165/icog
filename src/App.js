// import logo from "./logo.jpg";
import "./App.css";
import WorkspaceFormStepper from "./containers/WorkSpaceForm/WorkspaceFormStepper";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <WorkspaceFormStepper />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
       </header>
    </div>
  );
}

export default App;
