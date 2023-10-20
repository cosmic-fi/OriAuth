export interface User {
    uid: string;
    email: string;
}
export default class OriAuth {
    private apiKey;
    private authDomain;
    private firebaseAuthUrl;
    constructor(apiKey: string, authDomain: string);
    createUser(email: string, password: string, displayName: string): Promise<User>;
    getUser(email: string, password: string): Promise<User>;
    resetPassword(email: string): Promise<void>;
    logout(idToken: string): Promise<void>;
}
