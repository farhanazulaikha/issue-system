import { Issue } from '../interfaces/issue.interface';
import { Request, Response, NextFunction } from 'express';

export function validateIssueRequest(req: Request, res: Response, next: NextFunction) {
    const issue = req.body as Issue;
    if(!issue) {
        res.status(400).json({ message: 'fail'})
    }
    next()
}