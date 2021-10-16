import express from 'express';
import welcome from '../../controllers/welcomeController';
import { isLogedIn } from '../../utils/isLogeIn';

const router = express.Router();

router.get('/',isLogedIn, welcome);

export default router;