"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIssue = void 0;
const createIssue = (req, res, next) => {
    try {
        const issue = req.body;
        var errors = req.validationErrors();
        if (errors) {
            res.json({ errors });
        }
        else {
            res.status(200).json({ message: 'issue submitted successfully', issue });
        }
    }
    catch (err) {
        return next(err);
    }
};
exports.createIssue = createIssue;
