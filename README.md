# Ori-Auth

Ori-Auth is a simple TypeScript npm package designed to handle Firebase authentication. It offers a set of easy-to-use functions for creating users, retrieving user data, logging in, resetting passwords, and logging out.

## Installation

You can install Ori-Auth via npm or yarn:

```bash
npm install ori-auth
```
or

```bash
yarn add ori-auth.
```

## Getting Started
To begin using Ori-Auth in your project, follow these simple steps:

1 - To begin using Ori-Auth in your project, follow these simple steps:

```javascript
const { OriAuth } = require('ori-auth');

const oriAuth = new OriAuth();

oriAuth.config({
  firbaseappapi: 'your-api-key'
});
```


2 - You're all set to use the functions provided by Ori-Auth for user authentication.

## Usage
**Creating a User**
- Create a new user with an email and password while saving their username and UID to Firestore:

```javascript
const user = await oriAuth.createUser(email, password, username);
```

**Getting User Data**
Retrieve user data after logging them in with an email and password, including their username and UID stored in Firestore:

```javascript
const user = await oriAuth.getUser(email, password);
```
**Logging Out**
Log out the currently authenticated user:

```javascript
await oriAuth.logout();
```

## License
This project is licensed under the MIT License. For more details, please see the (LICENSE)[] file.