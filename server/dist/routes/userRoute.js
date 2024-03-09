"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const userController_1 = require("../controllers/userController");
const request_validation_middleware_1 = require("../middleware/request-validation.middleware");
router.post('/login', request_validation_middleware_1.validateUserRequest, userController_1.login);
exports.default = router;
