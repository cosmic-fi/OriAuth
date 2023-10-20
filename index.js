const admin = require('firebase-admin') 

class OriAuth {
  constructor(config) {
    admin.initializeApp({
      credential: admin.credential.cert(config),
      databaseURL: config.databaseURL,
    });
  }

  async login(email, password) {
    try {
      await admin.auth().signInWithEmailAndPassword(email, password);
      return 'Login successful';
    } catch (error) {
      throw new Error('Login failed');
    }
  }

  async createUser(email, password, username) {
    try {
      const userCredential = await admin.auth().createUser({
        email: email,
        password: password,
      });

      const uid = userCredential.uid;

      await admin.firestore().collection('users').doc(uid).set({
        email: email,
        username: username,
      });

      return 'User created successfully';
    } catch (error) {
      throw new Error('User creation failed');
    }
  }

  async logout() {
    await admin.auth().signOut();
    return 'User logged out';
  }

  async resetPassword(email) {
    await admin.auth().sendPasswordResetEmail(email);
    return 'Password reset email sent';
  }
}

module.exports = OriAuth;