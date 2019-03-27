import axios from 'axios';

export enum Errors {
  unexpected = 'unexpected',
  notLogged = 'not_logged',
  incorrectCredentials = 'incorrect_credentials',
  incorrectRequest = 'incorrect_request',
  notFound = 'not_found',
  alreadyExists = 'already_exists',
}

declare var process: any;
const client = axios.create({
  baseURL: 'http://localhost:3005',
});

client.interceptors.response.use((response) => {
  return response;
}, (error) => {
  const response = error.response;
  if (!response) return Promise.reject(error);

  const code = response.status;

  if (code === 401) {
    return Promise.reject({ message: error.response.statusText, code: Errors.incorrectCredentials });
  } else {
    return Promise.reject({ message: error.response.statusText, code: Errors.unexpected });
  }
});

export default client;
