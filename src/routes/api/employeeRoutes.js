import express from 'express';
import {createEmployee, editEmployee, suspendEmployee, activateEmployee, deleteEmployee, searchEmployee} from '../../controllers/employeeControllers'
import { isLogedIn } from '../../utils/isLogeIn';
import { sendEmailToEmployee } from '../../utils/sendEmailToEmployee';
const router = express.Router();

// create employee
router.post('/',isLogedIn,createEmployee, sendEmailToEmployee);

// edit employee
router.put('/edit/:empcode',isLogedIn,editEmployee);
// suspend employee
router.put('/suspend/:empcode',isLogedIn,suspendEmployee);
// activate employee
router.put('/activate/:empcode',isLogedIn,activateEmployee);
// delete employee
router.delete('/:empcode',isLogedIn,deleteEmployee);
// search employee 
router.get('/search',isLogedIn,searchEmployee);

export default router;