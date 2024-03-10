import { Request, Response, NextFunction } from 'express';

export function validateIssueRequest(req: Request, res: Response, next: NextFunction) {
    req.check('name', 'Please enter a name').trim().notEmpty(),
    req.check('name', 'Please enter a name in string format').isString(),
    req.check('email', 'Please enter an email').trim().notEmpty(),
    req.check('email', 'Please enter an email in string format').isString(),
    req.check('email', 'Please enter a valid email').isEmail(),
    req.check('selectedCategory', 'Please choose/enter a category').trim().notEmpty(),
    req.check('selectedCategory', 'Please choose/enter a category in string').isString(),
    req.check('selectedSubCategory', 'Please choose/enter a subcategory').trim().notEmpty(),
    req.check('selectedSubCategory', 'Please choose/enter a subcategory in string').isString(),
    req.check('description', 'Please enter a description').trim().notEmpty(),
    req.check('description', 'Please enter a description in string').isString(),
    next();
}