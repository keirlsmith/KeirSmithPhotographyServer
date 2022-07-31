const express = require('express');
const bioRouter = express.Router();

bioRouter.route('/')
.all((req, res, next) => {
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send bio to you');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /bio');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /bio');;
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE not supported by /bio.');
});


module.exports = promotionRouter;