export type IGetUsersList = (type: string) => Promise<IUsersList>;

export type IInviteUser = (type: string, email?: string) => Promise<IInvite>;

export interface IInvite {
  invite_code: string
}

export interface IUsersList {
  type: string;
  list: IAdminCompany[] | IAdminStudent[] | IAdminAdmin[];
}
export interface IAdminCompany {
  id: string;
  name: string;
  email: string;
  filled_info: number;
  contact_info: any;
}

export interface IAdminStudent {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  completed_profile: number;
  uni: string;
  degree: string;
}

export interface IAdminAdmin {
  id: string;
  email: string;
}