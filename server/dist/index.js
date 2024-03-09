"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
require("dotenv").config({ path: "../.env" });
const port = 3500;
const userRoute_1 = __importDefault(require("./routes/userRoute")); // Route connected
app.use(express_1.default.json());
app.use(function (req, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
});
app.use('/user', userRoute_1.default); // This means all route path preceed this path
// app.get('/', (req, res) => {
//     res.send('aku bosan')
// })
// app.get('/health', (req, res) => {
//     res.send(`ok`)
// })
// app.get('/try', (req, res) => {
//     res.send(`try`)
// })
// app.get('/:id', (req, res) => {
//     console.log(`Query parameter: ${JSON.stringify(req.query)}`);
//     console.log(`Headers: ${JSON.stringify(req.headers)}`);
//     console.log(`Method: ${req.method}`);
//     res.status(200).header({'X-Custom-Header': 'foo', 'X-Custom-Header-2': 'fuu'}).send(`iya, ${req.params.id}`)
// })
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
