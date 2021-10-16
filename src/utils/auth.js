import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';

const salt = bcrypt.genSaltSync(10,'b');
const secret = process.env.JWT_SECRET_KEY;

export const hashPassword = (plainPassword) => {
    const hash = bcrypt.hashSync(plainPassword, salt);
    return hash;
}

export const comparePassword = (password, userPassword) => {
    const result = bcrypt.compareSync(password, userPassword);
    return result;
};

export const generateToken = (payload, expiresIn = '7d') => {
    const token = jwt.sign({ ...payload }, secret, { expiresIn });
    return token;
};

export const decodeToken = async (token) => {
    const decoded = await jwt.verify(token, secret);
    return decoded;
};