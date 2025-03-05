# Note Taking App

A note-taking application built using **MongoDB**, **Express.js**, **Node.js** stack. This app allows users to create, edit, and delete notes.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

## Prerequisites

1. Node and npm are required. Here are the versions that I have used.

   ```bash
   node --version

   v22.1.0
   ```

   ```bash
   npm --version

   10.7.0
   ```

2. Git is required. Here's the version that I have used

   ```bash
   git --version

   git version 2.45.0.windows.1
   ```

3. At last, a GitHub account. :octocat:

## Technologies Used

- **Node.js:** JavaScript runtime for building scalable network applications.
- **Express.js:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing data.
- **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Bcrypt:** Library for hashing passwords.
- **Jsonwebtoken:** Library for creating and verifying JSON Web Tokens.
- **CORS:** Middleware for enabling Cross-Origin Resource Sharing.

## Installation and Setup

To set up this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/PolyPasc/Notes-mern.git

    cd Notes-mern/backend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Create a `.env` file:**

    Duplicate the `.env.example` file and rename it to `.env`. Fill in the required environment variables, such as MongoDB connection strings and token secret.

    ```
    MONGO_URI=mongodb_connection_string_without_db_name
    TOKEN_SECRET=your_jwt_secret
    PORT=your_desired_port
    ```

## Running the Project

- **Start Server:** Use `npm run dev` for development mode with automatic restarts.

  ```bash
  npm run dev
  //or
  nodemon index.js
  ```

  The server will start on `http://localhost:3737`. If the `PORT` environment variable in `.env` file is `3737`.

## Project Structure

Here is a brief overview of the project structure:

```
    /controllers            # Controllers for handling requests
    /models                 # Mongoose models
    /routes                 # API routes
    index.js                # Server entry point
    utils.js                # Utility functions
    .env.example            # Sample environment variables
    .gitignore              # Git ignore files
    package-lock.json       # Locks dependencies versions
    package.json            # Project metadata and dependencies
```

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch `git checkout -b feature/YourFeature`.
3. Make your changes.
4. Commit your changes `git commit -am 'Add new feature'`.
5. Push to the branch `git push origin feature/YourFeature`.
6. Create a new Pull Request.

## Acknowledgments

- [Node.js](https://nodejs.org/)
- [Express.js](http://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [JSON Web Token](https://jwt.io/)
- [Nodemon](https://nodemon.io/)

## Contact

For any questions or feedback, please reach out to:

- :e-mail: **Email:** github@technologist.anonaddy.com
- :point_right: **LinkedIn:** [in/pratap-adit](https://www.linkedin.com/in/pratap-adit)
- :octocat: **GitHub:** [PolyPasc](https://github.com/PolyPasc)

---

Thank you for checking out my project! If this project helped / interests you, then give it a :star2: Star.
