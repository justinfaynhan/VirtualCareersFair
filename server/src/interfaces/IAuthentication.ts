export type IRegister = (email: string, password: string, invite_code: string) => Promise<IAuthenticationSuccess>;

export type ILogin= (email: string, password: string) => Promise<IAuthenticationSuccess>;

export interface IAuthenticationSuccess {
  user_token: string;
}