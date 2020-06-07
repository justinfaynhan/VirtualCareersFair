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
  name: string | null;
  email: string;
  filled_info: number;
  contact_info: string | null;
}

export interface IAdminStudent {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  completed_profile: number;
  uni: string | null;
  degree: string | null;
}

export interface IAdminAdmin {
  id: string;
  email: string;
}