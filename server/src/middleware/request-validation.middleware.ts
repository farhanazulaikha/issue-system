import { User } from '../interfaces/user.interface';
import { Request, Response, NextFunction } from 'express';

export function validateUserRequest(req: Request, res: Response, next: NextFunction) {
    const user = req.body as User;
    if(!user || typeof user.username !== 'string' || typeof user.email !== 'string') {
        res.status(400).json({ message: 'Invalid user data'})
    }
}