// TODO
export interface ITodoItem {
  id?: string,
  label?: string,
  completed?: boolean,
}

// ERRORS
export enum Errors {
  unexpected = 'unexpected',
  notLogged = 'not_logged',
  incorrectCredentials = 'incorrect_credentials',
  incorrectRequest = 'incorrect_request',
  notFound = 'not_found',
  alreadyExists = 'already_exists',
}

export interface IResponse<T> {
  error?: { message?: string, code: Errors };
  result?: T;
}