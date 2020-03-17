const express = require("express");
const user = express.Router();
const Sequelize = require("sequelize");
const db = require('../config/database');
const Users = require('../model/Users');

// Test if router works
user.get('/', (req, res, next) => res.status(200).send(findAllRecords()));

// Retrieving records from the DB > user table
const findAllRecords = () => {
    // The First Method
    /*
    Users.findAll({
        attributes: ['id', 'first_name', 'last_name', 'email']
    });*/

    // total count of COUNT(emails)
    /*
    Users.findAll({
        attributes: {
            include: [
                [
                    Sequelize.fn('COUNT', Sequelize.col('email')), 'allEmails'
                ]
            ],

            exclude: ['id']
        }
    });*/

    // The Second Method
    Users.findAll()
        .then((userResponse) => console.log(userResponse))
        .catch((errorResponse) => console.log(errorResponse));
}

// Add records into the user table
user.get('/post', (req, res) => {

    if (res.status(200)) {
        res.send(postRecords());
        res.redirect('/user');
    } else {
        res.status(400).redirect('/user');
    }
});

const postRecords = () => {

    const postData = {
        first_name: 'Sello',
        last_name: 'Magagula',
        email: 'CyberPunk26@gmail.com'
    }

    let {
        first_name,
        last_name,
        email
    } = postData;

    Users.create({
            first_name,
            last_name,
            email
        })
        .then((responseData) => {
            console.log(responseData);
        })
        .catch((errorResponse) => console.log(errorResponse));
}

user.get('/update', (req, res) => res.status(200).send(updateRecords()));
// Updating records manually
const updateRecords = () => {

    Users.update({
            first_name: 'William Paulson'
        }, {
            where: {
                id: 1
            }
        })
        .then((affectedRows) => {
            console.log(affectedRows)
        })
        .catch((errorResponse) => console.log(`Errors Caught on UPDATE STATEMENT => ${errorResponse}`));;
}

// Deleting user records by ID
user.get('/delete', (req, res) => res.status(200).send(deleteRecords()));

const deleteRecords = () => {

    Users.destroy({
            where: {
                email: 'CyberPunk26@gmail.com'
            }
        })
        .then((deleteResponse) => {
            console.log(deleteResponse);

            Users.findAll()
                .then(found => console.log(`Results after removing a record => ${found}`))
                .catch(errorDeleteResponse => console.log(`Error Deleting Record(s) => ${errorDeleteResponse}`))
        })
        .catch((errorDestroyResponse) => console.log(`Error on Destroy Fn() => ${errorDestroyResponse}`));

}
module.exports = user;