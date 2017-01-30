# Instagram Clone
The Gram is an MVP for an Instagram clone built with React, Redux, Express, Sequelize, and PostgreSQL.
## Database Setup
In postgres, create a database called "instagram-clone"

In the config folder, create a file named config.json. Then, copy the contents
of the configDemo.json file, and paste it into the config.json file you created.

Also, change the "username", "database", and "dialect" fields in the config.json
file. Username should be your username for the database, database should be
"instagram-clone", and dialect should be "postgres".

Change the fields for development, test, and production

## Start
First: `npm install`
To start: `npm start`

## Testing
You can add new tests in the `test` folder.

To test: `npm test`

Your tests are also automatically called as part of `npm start`

## Seeding
To seed the database, go into the instagram-clone directory and then enter `bash ./seed.sh` into the terminal
