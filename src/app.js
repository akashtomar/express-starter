const express = require('express');
const app = express();
const apiRouter = require('./api'); //code for all the apis


app.get('/isalive', (req, res)=>{
    /**
     * health check url
     */
    res.send("Server is live");
});

app.use('/api', apiRouter);




module.exports = app;