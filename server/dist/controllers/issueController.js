"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIssue = void 0;
const createIssue = (req, res, next) => {
    const issue = req.body;
    res.status(200).json({ message: 'issue created successfullei', issue });
};
exports.createIssue = createIssue;
