import axios from 'axios';

export interface User {
  uid: string;
  email: string;
}

export default class OriAuth {
  private apiKey: string;
  private authDomain: string;
  private firebaseAuthUrl: string;

  constructor(apiKey: string, authDomain: string) {
    this.apiKey = apiKey;
    this.authDomain = authDomain;
    this.firebaseAuthUrl = `https://${this.authDomain}`;
  }

  async createUser(email: string, password: string, displayName: string): Promise<User> {
    try {
      const createUserResponse = await axios.post(`${this.firebaseAuthUrl}/accounts:signUp?key=${this.apiKey}`, {
        email,
        password,
        displayName,
      });
      const user = createUserResponse.data;
      return user as User;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }

  async getUser(email: string, password: string): Promise<User> {
    try {
      const signInResponse = await axios.post(`${this.firebaseAuthUrl}/accounts:signInWithPassword?key=${this.apiKey}`, {
        email,
        password,
        returnSecureToken: true,
      });
      const user = signInResponse.data;
      return user as User;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }

  async resetPassword(email: string): Promise<void> {
    try {
      await axios.post(`${this.firebaseAuthUrl}/accounts:sendOobCode?key=${this.apiKey}`, {
        email,
        requestType: 'PASSWORD_RESET',
      });
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }

  async logout(idToken: string): Promise<void> {
    try {
      await axios.post(`${this.firebaseAuthUrl}/accounts:signOut?key=${this.apiKey}`, {
        idToken,
      });
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
}