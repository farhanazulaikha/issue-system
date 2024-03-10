import { Request, Response, NextFunction } from 'express';

export function validateIssueRequest(req: Request, res: Response, next: NextFunction) {
    req.check('name', 'Please enter a name').notEmpty(),
    req.check('name', 'Please enter a name in string format').isString(),
    req.check('email', 'Please enter an email').notEmpty(),
    req.check('email', 'Please enter an email in string format').isString(),
    req.check('email', 'Please enter a valid email').isEmail(),
    req.check('selectedCategory', 'Please choose/enter a category').notEmpty(),
    req.check('selectedCategory', 'Please choose/enter a category in string').isString(),
    req.check('selectedSubCategory', 'Please choose/enter a subcategory').notEmpty(),
    req.check('selectedSubCategory', 'Please choose/enter a subcategory in string').isString(),
    req.check('description', 'Please enter a description').notEmpty(),
    req.check('description', 'Please enter a description in string').isString(),
    next();
}