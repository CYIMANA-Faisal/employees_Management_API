import models from '../models';
import { generateEmpCode } from '../utils/generateEmpCode';
import EmpError from '../utils/errors/BadRequestError';
import userExist from '../services/findManager';
import employeeExist from '../services/findEmployee';
import 'express-async-errors';

export const createEmployee = async (req, res, next) => {
    const data = {
        name: req.body.name,
        nationalID: req.body.nationalID,
        code: generateEmpCode(),
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        dateOfBirth: req.body.dateOfBirth,
        status: 'INACTIVE',
        position:  req.body.position
    }
    // checking if employee exist
    const existingEmployee = await userExist(data.email);
    if (existingEmployee) {
        throw new EmpError((`Employee with this email "${data.email}" already exist, Please login instead`), 404);
    }
    try {
        const employee = await models.Employee.create(data);
        res.status(200).json({ status: 200, message: `Employee ${employee.name} created successfully`, data: employee });  
    } catch (error) {
        next(error)
    }
}

export const editEmployee = async (req, res, next) => {
    const data = req.body;
    const empCode = req.params.empcode.toString();
    // checking if employee exist
    const existingEmployee = await employeeExist(empCode);
    console.log(existingEmployee);
    if (existingEmployee === null) {
        throw new EmpError((`The employee you are trying to edit does not exist in the database`), 404);
    }
    try {
        await models.Employee.update(data, {
            where: {
                code: empCode
            }
        });
        const updatedEmp =  await employeeExist(empCode);
        res.status(200).json({ status: 200, message: `Employee ${updatedEmp.name} updated successfully`,data: updatedEmp});  
    } catch (error) {
        next(error);
    }
}

export const suspendEmployee = async (req, res, next) => {
    const empCode = req.params.empcode.toString();
    // checking if employee exist
    const existingEmployee = await employeeExist(empCode);
    console.log(existingEmployee);
    if (existingEmployee === null) {
        throw new EmpError((`The employee you are trying to suspend does not exist in the database`), 404);
    }
    try {
        await models.Employee.update({status: 'INACTIVE'}, {
            where: {
                code: empCode
            }
        });
        res.status(200).json({ status: 200, message: `Employee with code ${empCode} suspended successfully`});  
    } catch (error) {
        next(error);
    }
}

export const activateEmployee = async (req, res, next) => {
    const empCode = req.params.empcode.toString();
    // checking if employee exist
    const existingEmployee = await employeeExist(empCode);
    console.log(existingEmployee);
    if (existingEmployee === null) {
        throw new EmpError((`The employee you are trying to activate does not exist in the database`), 404);
    }
    try {
        await models.Employee.update({status: 'ACTIVE'}, {
            where: {
                code: empCode
            }
        });
        res.status(200).json({ status: 200, message: `Employee with code ${empCode} activate successfully`});  
    } catch (error) {
        next(error);
    }
}

export const deleteEmployee = async (req, res, next) => {
    const empCode = req.params.empcode.toString();
    // checking if employee exist
    const existingEmployee = await employeeExist(empCode);
    console.log(existingEmployee);
    if (existingEmployee === null) {
        throw new EmpError((`The employee you are trying to delete does not exist in the database`), 409);
    }
    try {
        await models.Employee.destroy({
            where: {
                code: empCode
            }
        });
        res.status(200).json({ status: 200, message: `Employee with code ${empCode} deleted successfully`});  
    } catch (error) {
        next(error);
    }
}
