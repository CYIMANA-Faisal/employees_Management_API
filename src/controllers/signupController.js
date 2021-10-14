import models from '../models';
import { generateEmpCode } from '../utils/generateEmpCode';

const signupController = async (req, res, next) => {
    console.log(req.body);
    // try {
    //     const manager = await models.Employee.create();
    // } catch (error) {
        
    // }
    res.status(200).json({ status: 200, message: 'this will sign up the user'});
};

export default signupController;