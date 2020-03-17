"use strict";

const express = require("express");
require("dotenv").config();
const Sequelize = require("sequelize");
const db = require('./config/database');
//const exphbs = require('express-handlebars');
// Testing the connection
db.authenticate()
    .then(() => console.log("Sequelize Connected"))
    .catch(errorResponse => console.log(`Error Caught => ${errorResponse}`));

const application = express();

application.get("/", (req, res) => {
    res.status(200).send("Good");
});

// routes to use when performing actions
application.use('/user', require('./routes/user'));
application.use('/post', require('./routes/user'));
application.use('/update', require('./routes/user'));
application.use('/delete', require('./routes/user'));

const PORT = process.env.PORT || 5000;
// Listen For Port
application.listen(PORT, error => {
    if (error) {
        console.log(`An Error Occured Connecting To Port ${process.env.PORT}`);
        return;
    }

    console.log(`Connected To Port ${process.env.PORT}`);
});