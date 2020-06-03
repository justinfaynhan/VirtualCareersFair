export class UserAuthDetail {
    username: string;
    token: string;

    constructor(user, token) {
        this.username = user;
        this.token = token;
    }
}

export class UserLoginCredentials {
    username: string;
    password: string;

    constructor(user, pass) {
        this.username = user;
        this.password = pass;
    }
}

export class UserSignUpCredentials {
    username: string;
    password: string;
    signupCode: string;

    constructor(user, pass, code) {
        this.username = user;
        this.password = pass;
        this.signupCode = code;
    }
}