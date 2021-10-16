import sgMail from '@sendgrid/mail';
import 'dotenv/config';
import { generateToken } from './auth';

export const sendEmail = async (req, res, next) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const data = {
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email
    }
    const accessToken = generateToken({username: data.name, email: data.email});
    const msg = {
        to: data.email,
        from: 'cyimanafaisal@gmail.com', // Use the email address or domain you verified above
        subject: 'Account verification',
        html: `<h1> Copy the link below and use it to send request using postman client this will verify your account </br> Note: the request has to be a PUT request </h1> </br> {{baseUrl}}/user/verify?token=${accessToken}`,
    };
    try {
        await sgMail.send(msg);
        return res.status(201).json({
            status: 201,
            message: "You have successfully signedup, Please check your email to verify your account"
        })
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body)
        }
    }
}