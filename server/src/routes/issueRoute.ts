import { Router } from 'express';
const router = Router();
import { createIssue } from '../controllers/issueController';
import { validateIssueRequest } from '../middleware/request-validation.middleware';

router.post('/submit-issue', validateIssueRequest, createIssue); 

export default router;