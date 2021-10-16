import models from '../models';
import { generateEmpCode } from '../utils/generateEmpCode';
import signUpError from '../utils/errors/BadRequestError';
import userExist from '../services/findManager';
import 'express-async-errors';
import { comparePassword, decodeToken, generateToken, hashPassword } from '../utils/auth';

export const signupController = async (req, res, next) => {
    const data = {
        name: req.body.name,
        nationalID: req.body.nationalID,
        code: generateEmpCode(),
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        password: hashPassword(req.body.password),
        dateOfBirth: req.body.dateOfBirth,
        status: 'INACTIVE',
        position: 'MANAGER'
    }
    // checking if manager exist
    const existingManager = await userExist(data.email);
    if (existingManager) {
        throw new signUpError((`Manager with this email "${data.email}" already exist, Please login instead`), 404);
    }
    try {
        await models.Employee.create(data);
        next();
    } catch (error) {
        next(error);
    }
};

export const signinController = async (req, res, next) => {
    const data = {
        email: req.body.email,
        password: req.body.password 
    }
    // checking if manager exist
    const existingManager = await userExist(data.email);
    if (existingManager === null) {
        throw new signUpError((`There is no Manager associated with this email "${data.email}" `), 404);
    }
    if (existingManager.status === 'INACTIVE') {
        throw new signUpError((`Please verify your email`), 403);
    }
    try {
        if (comparePassword(data.password, existingManager.password)) {
            const token = generateToken({
                id: existingManager.id,
                email: existingManager.email,
                code: existingManager.code
            });
            await models.Employee.update({refreshToken: token}, {
                where: {
                    id: existingManager.id
                }
            });
            res.status(200).json({ status: 200, message: `Signed in successfully`, data: token });
        }else{
            throw new signUpError((`Invalid credentials`), 401);
        }
    } catch (error) {
        next(error);
    }
};

export const verifyAccountController = async (req, res, next) => {
    const token = req.query.token
    try {
        const data = await decodeToken(token);
        await models.Employee.update({status: 'ACTIVE'}, {
            where:{
                email: data.email
            }
        })
        return res.status(201).json({ status: 201, message: `Your account is now activated`});
    } catch (error) {
        
    }
}