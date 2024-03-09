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

app.use('/user', userRoutes);// This means all route path preceed this path

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
    console.log(`Listening to port ${port}`)
}, );

