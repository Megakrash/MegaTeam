## Setup & Use

### Project Initialization

- Run command `npm run setup`
- Create .env file in the backend use "megateam" as BD name then run command "npm run migrate"
- Create .env file in the frontend then go to https://www.superheroapi.com/index.html to get a API KEY.

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

