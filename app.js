const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const app = express();
const PORT = process.env.PORT;
const path = require('path');
const products = require('./data/products.json');
const productRouter = express.Router();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));  //set up to start with index.html

productRouter.route("/").get((req, res) => {
    res.render("products",
        products
    );
})
app.use("/products", productRouter)

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('index', { username: "Latte boy 2", customer: ["Jiew", "Jame", "John"] });
})

app.listen(PORT, () => {
    debug("Listening on Port " + chalk.red(PORT));
})