import express from 'express';
import {createEmployee, editEmployee, suspendEmployee, activateEmployee, deleteEmployee} from '../../controllers/employeeControllers'
import { isLogedIn } from '../../utils/isLogeIn';
const router = express.Router();

// create employee
router.post('/',isLogedIn,createEmployee);

// edit employee
router.put('/edit/:empcode',isLogedIn,editEmployee);
// suspend employee
router.put('/suspend/:empcode',isLogedIn,suspendEmployee);
// activate employee
router.put('/activate/:empcode',isLogedIn,activateEmployee);
// delete employee
router.delete('/:empcode',isLogedIn,deleteEmployee);

export default router;