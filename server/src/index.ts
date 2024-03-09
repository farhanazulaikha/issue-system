import express from 'express';
const app = express();
require("dotenv").config({ path: "../.env" });
const port = 3500;
import userRoutes from './routes/userRoute';   // Route connected

app.use(express.json());

app.use(function(req, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
});

app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
}, );

