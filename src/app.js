const express = require('express');
const router = require('./router/router');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'../public')))
app.use(router);
module.exports = app;
