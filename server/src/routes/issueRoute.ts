import { Router } from 'express';
const router = Router();
import { createIssue } from '../controllers/issueController';
import { validateIssueRequest } from '../middleware/request-validation.middleware';

router.post('/create-issue', validateIssueRequest, createIssue); 

export default router;