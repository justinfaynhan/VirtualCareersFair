export type IRegister = (username: string, password: string, invite_code: string) => Promise<IAuthenticationSuccess>;

export type ILogin= (username: string, password: string) => Promise<IAuthenticationSuccess>;

export interface IAuthenticationSuccess {
  user_token: string;
}