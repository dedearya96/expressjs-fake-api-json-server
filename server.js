import express from 'express';
import jsonServer from 'json-server';

const app = express();
const port = 5000;
const middleware = jsonServer.defaults();
const router = jsonServer.router('db.json');
app.use(middleware);
app.use('/', router);
app.listen(port, () => {
    console.log("Server running on http://localhost:" + port)
});