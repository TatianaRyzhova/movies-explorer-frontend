import React, {useEffect, useState} from "react";
import {Route, Switch, useHistory} from 'react-router-dom';
import './App.css';
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import {checkToken, login, register} from "../../utils/Auth";
import {mainApi} from "../../utils/MainApi";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [success, setSuccess] = useState(false);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkToken(token)
        .then((result) => {
          if (result) {
            setLoggedIn(true);
            setUserName(result.name);
            setEmail(result.email);
            history.push('/');
          }
        })
        .catch(() => history.push('/'));
    }
  }, [history]);

  const handleLogin = ({email, password}) => {
    return login(email, password)
      .then(result => {
        if (result.token) {
          localStorage.setItem('token', result.token);
          setLoggedIn(true);
          setEmail(email);
          history.push('/');
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setEmail('');
    setUserName('');
    setLoggedIn(false);
    history.push('/signin');
  }

  const handleRegister = (name, email, password) => {
    return register(name, email, password)
      .then(result => {
        setSuccess(true);
        setLoggedIn(true);
        setInfoTooltipPopupOpen(true);
        history.push('/movies');
        return result
      })
      .catch((error) => {
        setInfoTooltipPopupOpen(true);
        console.log(error)
      })
  }

  function closeAllPopups() {
    setInfoTooltipPopupOpen(false);
  }



  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>

        <Route path="/signup">
          <Register onRegister={handleRegister}/>
        </Route>

        <Route path="/signin">
          <Login/>
        </Route>

        <Route path="/profile">
          <Profile/>
        </Route>

        <Route path="/movies">
          <Movies/>
        </Route>

        <Route path="/saved-movies">
          <SavedMovies/>
        </Route>

        <Route path="/">
          <NotFound/>
        </Route>
      </Switch>

      <InfoTooltip
        isOpen={isInfoTooltipPopupOpen}
        success={success}
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;
