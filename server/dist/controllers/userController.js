"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const login = (req, res, next) => {
    const { username, email } = req.body;
    console.log(username, email);
    res.json({ message: 'user created successfully', username, email });
};
exports.login = login;
