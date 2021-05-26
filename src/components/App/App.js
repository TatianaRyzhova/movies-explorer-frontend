import React, {useEffect, useState} from "react";
import {Redirect, Route, Switch, useHistory} from 'react-router-dom';
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
import {moviesApi} from "../../utils/MoviesApi";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [success, setSuccess] = useState(false);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [infoTooltipMessage, setInfoTooltipMessage] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isMoviesErrors, setIsMoviesErrors] = React.useState('');
  const [movies, setMovies] = useState([]);

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

  const handleLogin = (email, password) => {
    return login(email, password)
      .then(result => {
        if (result.token) {
          localStorage.setItem('token', result.token);
          setLoggedIn(true);
          setEmail(email);
          setUserName(result.name);
          history.push('/movies');
        }
      })
      .catch((error) => {
        setSuccess(false);
        setInfoTooltipPopupOpen(true);
        setInfoTooltipMessage('Incorrect email or password.');
        console.log(error)
      })
  }

  const handleRegister = (name, email, password) => {
    return register(name, email, password)
      .then(result => {
        setSuccess(true);
        setInfoTooltipPopupOpen(true);
        setInfoTooltipMessage('You have successfully registered!');
        history.push('/movies');
        return result
      })
      .then(() => {
        return handleLogin(email, password);
      })
      .catch((error) => {
        setSuccess(false);
        setInfoTooltipPopupOpen(true);
        setInfoTooltipMessage('Something went wrong! Please try again.');
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

  useEffect(() => {
    if (loggedIn) {
      mainApi.getUserInfo()
        .then((response) => {
          setCurrentUser(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [loggedIn])

  const handleUpdateUser = (user) => {
    setIsLoading(true);
    mainApi.updateUser(user.name, user.email)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        setSuccess(true);
        setInfoTooltipPopupOpen(true);
        setInfoTooltipMessage('Your data was successfully modified!')
      })
      .catch((error) => {
        console.log(error)
        setSuccess(false);
        setInfoTooltipPopupOpen(true);
        setInfoTooltipMessage('Something went wrong! Please try again.')
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function closeAllPopups() {
    setInfoTooltipPopupOpen(false);
  }

  function getFilteredMovies() {
    setIsLoading(true);
    setIsMoviesErrors();
    moviesApi.getMovies()
      .then((response) => {
        localStorage.setItem('movies', JSON.stringify(response))
        setMovies(response);
      })
      .catch((error) => {
        console.log(error);
        setIsMoviesErrors('An error occurred during the request. ' +
          'There may be a connection problem or the server is unavailable. Please try again later.');
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  useEffect(() => {
    moviesApi.getMovies()
      .then((response) => {
        // localStorage.setItem('movies', JSON.stringify(response))
        setMovies(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])


  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn}/>
          </Route>

          <Route path="/signup">
            <Register onRegister={handleRegister}/>
          </Route>

          <Route path="/signin">
            <Login onLogin={handleLogin}/>
          </Route>

          <ProtectedRoute
            path="/profile"
            component={Profile}
            handleSignOut={handleSignOut}
            email={email}
            name={userName}
            onUpdateUser={handleUpdateUser}
            loggedIn={loggedIn}
            isLoading={isLoading}
          />

          <ProtectedRoute
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            movies={movies}
            onGetMovies={getFilteredMovies}
            isMoviesLoading={isLoading}
            isMoviesErrors={isMoviesErrors}
          />

          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
          />

          <Route>
            {loggedIn ? <Redirect to="/movies"/> : <Redirect to="/signin"/>}
          </Route>

          {/*<Route path="/movies">*/}
          {/*  <Movies/>*/}
          {/*</Route>*/}
          {/*<Route path="/saved-movies">*/}
          {/*  <SavedMovies/>*/}
          {/*</Route>*/}

          <Route path="/">
            <NotFound/>
          </Route>
        </Switch>

        <InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          success={success}
          onClose={closeAllPopups}
          infoTooltipMessage={infoTooltipMessage}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
