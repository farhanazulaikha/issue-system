"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIssueRequest = void 0;
function validateIssueRequest(req, res, next) {
    const issue = req.body;
    if (!issue) {
        res.status(400).json({ message: 'fail' });
    }
    next();
}
exports.validateIssueRequest = validateIssueRequest;
