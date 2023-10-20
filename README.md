# Ori-Auth

Ori-Auth is a simple Javascrtipt npm package designed to handle Firebase authentication. It offers a set of easy-to-use functions for creating users, retrieving user data, logging in, resetting passwords, and logging out.

## Installation

You can install Ori-Auth via npm or yarn:

```bash
npm install ori-auth
```
or

```bash
yarn add ori-auth.
```

## Usage
To use this package, import it in your project:
  
```javascript
const OriAuth = require('ori-auth');
const auth = new OriAuth();
```

**Configuration**
To use this package, you need to configure it with your Firebase project details. 
Pass your Firebase project configuration object to the config method:

```javascript
const config = {
  apiKey: 'your-api-key',
  authDomain: 'your-auth-domain',
  projectId: 'your-project-id',
  storageBucket: 'your-storage-bucket',
  messagingSenderId: 'your-messaging-sender-id',
  appId: 'your-app-id',
};

auth.config(firebaseConfig);
```

## API Methods
`createUser(email: string, password: string, username: string): Promise<string>`
- Creates a new user with an email, password, and username. Returns the UID of the created user.

`getUser(email: string, password: string): Promise<any>`
- Logs in a user with an email and password, then retrieves the user's data from Firestore. Returns an object with the user's username and UID.

`login(email: string, password: string): Promise<void>`
- Logs in an existing user with an email and password.

`resetPassword(email: string): Promise<void>`
- Sends a password reset email to the given email address.

`logout(): Promise<void>`
- Logs the user out.

## Example
```javascript
const OriAuth = require('ori-auth');
const auth = new OriAuth();

const config = {
  apiKey: 'your-api-key',
  authDomain: 'your-auth-domain',
  projectId: 'your-project-id',
  storageBucket: 'your-storage-bucket',
  messagingSenderId: 'your-messaging-sender-id',
  appId: 'your-app-id',
};

auth.config(config);

async function run() {
  try {
    const uid = await auth.createUser('user@example.com', 'password123', 'myusername');
    console.log('Created user with UID:', uid);

    const userData = await auth.getUser('user@example.com', 'password123');
    console.log('User data:', userData);

    await auth.login('user@example.com', 'password123');
    console.log('Logged in');

    await auth.resetPassword('user@example.com');
    console.log('Password reset email sent');

    await auth.logout();
    console.log('Logged out');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

run();
```
## License

This project is licensed under the MIT License. For more details, please see the [LICENSE][license-link] file.




[license-link]: https://github.com/cosmic-fi/OriAuth/LICENSE.md
