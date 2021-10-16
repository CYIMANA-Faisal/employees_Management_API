import models from '../models';

const employeeExist = async (data) => {
    const employee = await models.Employee.findOne({
        where: { 
            code: data
        } 
    });
    return employee;
};
export default employeeExist;