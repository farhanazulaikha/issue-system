import express from 'express';
const app = express();
const port = 3001;
import issueRoutes from './routes/issueRoute';

app.use(express.json());

app.use(function(req, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
});

app.use('/issue', issueRoutes);