const express = require('express');
const router = require('./router/router');
const path = require('path');
const app = express();


app.disable("x-powered-by");
app.use(express.json());

app.use(express.static(path.join(__dirname,'../public')))
app.use(router);
module.exports = app;
