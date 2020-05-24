export type IRegister = (username: string, password: string, invite_code: string) => IAuthenticationSuccess;

export type ILogin= (username: string, password: string) => IAuthenticationSuccess;

export interface IAuthenticationSuccess {
  user_token: string;
}