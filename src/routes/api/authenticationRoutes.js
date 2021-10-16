import express from 'express';
import {signupController, signinController, verifyAccountController} from '../../controllers/authControllers';
import { sendEmail } from '../../utils/sendEmail';
const router = express.Router();

router.post('/signup',signupController, sendEmail);
router.post('/signin', signinController);
router.put('/verify', verifyAccountController);


export default router;