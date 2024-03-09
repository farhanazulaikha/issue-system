"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIssue = void 0;
const createIssue = (req, res, next) => {
    const issue = req.body;
    res.status(201).json({ message: 'issue created successfully', issue });
};
exports.createIssue = createIssue;
