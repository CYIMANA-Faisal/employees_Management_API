import sgMail from '@sendgrid/mail';
import 'dotenv/config';

export const sendEmailToEmployee = async (req, res, next) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const data = {
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email
    }
    
    const msg = {
        to: data.email,
        from: 'cyimanafaisal@gmail.com', // Use the email address or domain you verified above
        subject: 'WELCOME TO THE COMPANY',
        html: `Hello ${data.name} welcome, this email is to let you know that you have been added to the employee management company`,
    };
    try {
        await sgMail.send(msg);
        return res.status(201).json({
            status: 201,
            message: "The employee is created successfully and the email is sent to the provided email."
        })
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body)
        }
    }
}