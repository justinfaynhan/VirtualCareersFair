export type IGetUsersList = (type: string) => IUsersList;

export type IInviteUser = (type: string, email?: string) => IInvite;

export interface IInvite {
  invite_code: string
}

export interface IUsersList {
  type: string;
  list: [IAdminCompany | IAdminStudent]
}
export interface IAdminCompany {
  id: string;
  name: string;
  email: string;
  filled_info: boolean;
  contact_info: any;
}

export interface IAdminStudent {
  id: string;
  first_name: string;
  last_name: string;
  completed_profile: string;
  uni: string;
  degree: string;
}