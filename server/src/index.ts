import express from 'express';
const app = express();
const port = 3001;
import issueRoute from './routes/issueRoute';
import expressValidator from 'express-validator'

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json());

app.use(expressValidator());

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
});

app.use('/api', issueRoute);