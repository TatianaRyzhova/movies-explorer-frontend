import {Redirect, Link, Route, Switch, useHistory} from 'react-router-dom';
import './App.css';
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";

function App() {
  return (
    <div className="page">



      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>

        <Route path="/signup">
          <Register/>
        </Route>

        <Route path="/signin">
          <Login/>
        </Route>
      </Switch>

      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
