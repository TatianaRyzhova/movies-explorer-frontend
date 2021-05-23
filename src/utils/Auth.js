import {AUTH_BASE_URL} from "./constants";

const responseCheck = (response) => response.ok
  ? response.json()
  : Promise.reject(`Error ${response.status}`);

export const register = (name, email, password) => {
  return fetch(`${AUTH_BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  })
    .then(responseCheck)
};

export const login = (email, password) => {
  return fetch(`${AUTH_BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
    .then(responseCheck)
};

export const checkToken = (token) => {
  return fetch(`${AUTH_BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(responseCheck)
}
