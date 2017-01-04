# Instagram Clone

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

## Authentication
Authentication (aka login) is mostly setup, but still missing a couple key parts: a `login` and `auth` route in your API. You will need to create them in order for login to fully work.

You can see AJAX calls for these routes in the `Login.jsx` and `App.jsx` components
