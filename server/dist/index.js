"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
const issueRoute_1 = __importDefault(require("./routes/issueRoute"));
app.use(express_1.default.json());
app.use(function (req, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
});
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
app.use('/issue', issueRoute_1.default);
