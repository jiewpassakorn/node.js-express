const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const app = express();
const port = 3000;
const path = require('path');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));  //set up to start with index.html

app.get("/", (req,res)=>{
    res.send('Hello Passakorn, jiewpassakorn');
})

app.listen(port, ()=>{
    debug("Listening on Port "+chalk.red(port));
})