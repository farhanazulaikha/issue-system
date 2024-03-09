"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controllers/userController");
exports.default = (router) => {
    router.post('/auth/login', userController_1.login);
};
