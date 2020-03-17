# Sequelize with nodeJS Tutorial

![ScheCapture](https://user-images.githubusercontent.com/47104485/76856287-a4895e00-685b-11ea-9ac2-4be808b8bc71.PNG)

  In this tutorial, we will be learning how to make a simple database connection along with <a href="https://sequelize.org/v5/index.html">SequelizeJS</a> queries

Run the commands below:

```
Stage the npm package manager to load all the required depenndancies.

$ npm init -y
```

Then you will need to install [express, nodemon, dotenv]

```
$ npm install dotenv
$ npm install express
$ npm install nodemon
$ npm install --save sequelize
```
We will be using mySQL for this tutorial

```
This is the driver of the DB

$ npm install --save mysql2
```

```
__FILE & __DIR to create

Serialize
|_config
|     |_database.js
|_model
|     |_Users.js
|_routes
|     |_users.js
|
|_.env
|_index.js
```

Create a .env file in you parent directory:
```
Add

PORT = 5000
DB_HOST = 'your_DB_server'
DB_USER = 'your_DB_root'
DB_PASSWORD = 'your_DB_password'
DB_NAME = 'your_DB_name'
```
