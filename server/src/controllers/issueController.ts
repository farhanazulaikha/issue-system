import { RequestHandler } from 'express';
import { Issue } from '../interfaces/issue.interface';

export const createIssue: RequestHandler = (req, res, next) => {
  try {
    const issue = req.body as Issue

    var errors = req.validationErrors();

    if (errors) {
      res.json({errors})
    }
    else {
      res.status(200).json({message: 'issue submitted successfully', issue})
    }
  } catch(err) {
    return next(err)
  }
};