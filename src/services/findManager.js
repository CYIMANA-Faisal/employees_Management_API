import models from '../models';

const userExist = async (data) => {
    const manager = await models.Employee.findOne({
        where: { 
            email: data
        } 
    });
    return manager;
};
export default userExist;