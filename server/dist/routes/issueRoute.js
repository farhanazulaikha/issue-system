"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const issueController_1 = require("../controllers/issueController");
const request_validation_middleware_1 = require("../middleware/request-validation.middleware");
router.post('/create-issue', request_validation_middleware_1.validateIssueRequest, issueController_1.createIssue);
exports.default = router;
