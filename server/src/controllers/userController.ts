import express from 'express'
import { User } from '../interfaces/user.interface'

// const router = express.Router()

// Creating
import { RequestHandler } from 'express';
  export const login:RequestHandler = (req, res, next) => {
    const { username, email } = req.body;

    console.log(username, email)

    res.json({message: 'user created successfully', username, email})
};