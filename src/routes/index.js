import express from 'express';
import welcomeRoute from './api/welcomeRoute';
import authenticateRoute from './api/authenticationRoutes';

const routes = express.Router();

routes.use('/', welcomeRoute);
routes.use('/user', authenticateRoute);

export default routes;