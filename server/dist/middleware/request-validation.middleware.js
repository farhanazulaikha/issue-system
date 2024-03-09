"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserRequest = void 0;
function validateUserRequest(req, res, next) {
    const user = req.body;
    if (!user || typeof user.username !== 'string' || typeof user.email !== 'string') {
        res.status(400).json({ message: 'Invalid user data' });
    }
}
exports.validateUserRequest = validateUserRequest;
