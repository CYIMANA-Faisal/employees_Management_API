/* eslint-disable require-jsdoc */
import ApplicationError from './applicationError';

class BadRequestError extends ApplicationError {
  constructor(message,status) {
    super(message, status);
  }
}

export default BadRequestError;