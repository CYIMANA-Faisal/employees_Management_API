import express from 'express';
import welcomeRoute from './api/welcomeRoute';
import authenticateRoute from './api/authenticationRoutes';
import employeeRoutes from './api/employeeRoutes'


const routes = express.Router();

routes.use('/', welcomeRoute);
routes.use('/user', authenticateRoute);
routes.use('/employee', employeeRoutes);

export default routes;