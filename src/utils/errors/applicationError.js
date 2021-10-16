/* eslint-disable require-jsdoc */
class ApplicationError extends Error {
    constructor(message, status) {
      super(message);
  
      this.name = this.constructor.name;
      this.message = message || ('Something went wrong. Please try again');
      this.status = status || 500;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  export default ApplicationError;