# Node.js Backend Boilerplate

This has been created to have a basic server and database structure ready to rock. 

## Getting Started
1) Fork and `git clone` this repository.
2) Run `npm i` to install all dependencies.
3) Run `npm run server` to get that server up and ready to rock!

## Directories:

### api
The `api` directory holds the server, as well as the router "funnel" (apiRouter). 
- `server.js` is configured and ready to run using the standard middleware: `helmet`, `cors`, and `express.json()`.
- All route files built out will be imported into `api-router.js`, which acts as funnel for all route files leading into `server.js`.

### auth 
The `auth` directory hosts all required files for basic user registration/login. 
- `POST` requests to `/login` and `/registration` will both run through `validateUser.js` to ensure the credentials are filled out and valid.
- `generateToken.js` will produce the token that is passed into the response object upon successful registration/login.
- **NOTE**: Any additional required fields must be implemented into `validateUser.js` in the commented area of the code. This will ensure those values exists and are valid.

### config
The `config` directory holds any secrets used, as well as the middleware configuration for the server (`cors`, `helmet`, etc.). This helps prevent the middleware goodies from polluting the `server.js` file.

### database
The `database` directory has the `db-config.js`, `seeds`, and `migrations`. A `users` table is built out to allow you to add users during registration.
- **NOTE**: If you wish to add additional columns to the user table, all you need to do is run: `knex migrate:rollback`, and add your new columns to the table. Upon finishing, be sure to run: `knex migrate:latest` to revive the table back to life!
- The seeds directory `seeds` contains a cleanup file from the `knex-cleaner` package, to help keep your data nice and clean...ed up. :)

### middleware
The `middleware` directory is nice and straight forward, it will be the home for any middleware you wish to build out. Welcome home, middlewarez!

### models
The `models` directory will hold all of your database help functions. This will be what your routes access to complete `GET`, `POST,` `PUT`, and `DELETE` requests.

### routes 
The `routes` directory is meant to hold all of your routes/endpoints.
- **NOTE**: Make sure to import these route files into `api-router.js`, and _not_ `server.js`. `api-router.js` is there to help clump together all routes, for a nice, clean, and organized server file. _ooooo how purty!_

## Tools
- Node.js
- Express.js
- Knex
- SQLite3


