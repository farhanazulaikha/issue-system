import { Request, Response, NextFunction } from 'express';

export function validateIssueRequest(req: Request, res: Response, next: NextFunction) {
    req.check('name', 'name must not be empty').notEmpty();
    req.check('name', 'name must be in string').isString();
    req.check('email', 'Please enter your email in string').isString();
    req.check('email', 'Please enter a valid email').isEmail();
    req.check('selectedCategory', 'Please choose a category').notEmpty();
    req.check('selectedSubCategory', 'Please choose a subcategory').notEmpty();
    req.check('description', 'Please enter a description').notEmpty();
    req.check('description', 'Please enter a description in string').isString(),
    next();
}