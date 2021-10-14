import express from 'express';
import welcome from '../../controllers/welcomeController';
const router = express.Router();

router.get('/', welcome);

export default router;