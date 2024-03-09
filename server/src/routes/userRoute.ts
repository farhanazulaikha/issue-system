import { Router } from 'express';
const router = Router();
import { login } from '../controllers/userController';
import { validateUserRequest } from '../middleware/request-validation.middleware';

router.post('/login', validateUserRequest, login); 

export default router;