"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class OriAuth {
    constructor(apiKey, authDomain) {
        this.apiKey = apiKey;
        this.authDomain = authDomain;
        this.firebaseAuthUrl = `https://${this.authDomain}`;
    }
    async createUser(email, password, displayName) {
        try {
            const createUserResponse = await axios_1.default.post(`${this.firebaseAuthUrl}/accounts:signUp?key=${this.apiKey}`, {
                email,
                password,
                displayName,
            });
            const user = createUserResponse.data;
            return user;
        }
        catch (error) {
            throw new Error(error.response.data.error.message);
        }
    }
    async getUser(email, password) {
        try {
            const signInResponse = await axios_1.default.post(`${this.firebaseAuthUrl}/accounts:signInWithPassword?key=${this.apiKey}`, {
                email,
                password,
                returnSecureToken: true,
            });
            const user = signInResponse.data;
            return user;
        }
        catch (error) {
            throw new Error(error.response.data.error.message);
        }
    }
    async resetPassword(email) {
        try {
            await axios_1.default.post(`${this.firebaseAuthUrl}/accounts:sendOobCode?key=${this.apiKey}`, {
                email,
                requestType: 'PASSWORD_RESET',
            });
        }
        catch (error) {
            throw new Error(error.response.data.error.message);
        }
    }
    async logout(idToken) {
        try {
            await axios_1.default.post(`${this.firebaseAuthUrl}/accounts:signOut?key=${this.apiKey}`, {
                idToken,
            });
        }
        catch (error) {
            throw new Error(error.response.data.error.message);
        }
    }
}
exports.default = OriAuth;
