const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const app = express();
const port = 3000;

app.use(morgan('combined'));


app.get("/", (req,res)=>{
    res.send('Hello Passakorn, Jiew');
})

app.listen(port, ()=>{
    debug("Listening on Port "+chalk.red(port));
})