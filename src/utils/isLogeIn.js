import 'dotenv/config';
import jwt from 'jsonwebtoken';

export const isLogedIn = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        await jwt.verify(token, process.env.JWT_SECRET_KEY);
        next();
    } catch (error) {
        return res.status(401).json({
            status: 401,
            error: "Please login it seems you are not loged in"
        })
    }
}