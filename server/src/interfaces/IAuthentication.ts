export type IRegister = (username: string, password: string, invite_code: string) => string;

export type ILogin= (username: string, password: string) => string;