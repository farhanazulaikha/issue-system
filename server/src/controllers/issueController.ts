import { RequestHandler } from 'express';
import { Issue } from '../interfaces/issue.interface';

export const createIssue: RequestHandler = (req, res, next) => {
  const issue = req.body as Issue;
  res.status(200).json({message: 'issue created successfully', issue})
};