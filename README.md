# My Portfolio API

This is an API built with Node.js and MongoDB that allows you to store and manage your career projects. You can add, update, delete, and retrieve information about your projects through the API endpoints.

## Getting Started

To run this API on your local machine, follow these steps:

1. Clone this repository.
2. Install the dependencies with `npm install`.
3. Create a `.env` file in the root directory and add your MongoDB connection string like this: `MONGODB_URI=<your connection string>`.
4. Start the server with `npm start`.

The API will run on `http://localhost:3000` by default.

## API Endpoints

### `GET /projects`

Retrieves a list of all projects.

### `GET /projects/:id`

Retrieves a single project by ID.

### `POST /projects`

Adds a new project to the database. Requires a JSON body with the project information.

### `PUT /projects/:id`

Updates an existing project in the database. Requires a JSON body with the updated project information.

### `DELETE /projects/:id`

Deletes a project from the database by ID.

## Testing

You can test the API endpoints using a tool like [Postman](https://www.postman.com/) or by running automated tests with `npm test`.

To run the automated tests, make sure you have a test database set up and add the connection string to your `.env.test` file. Then run `npm test` to execute the tests.

## Contributing

Contributions to this project are welcome. To contribute, fork this repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/felipesud/project-tracker-api/blob/master/LICENSE) file for details.

