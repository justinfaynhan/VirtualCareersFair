export type IGetUsersList = (type: string) => [IAdminCompany | IAdminStudent];

export type IInviteUser = (type: string, email?: string) => IInviteCode;

export type IInviteCode = string;

export interface IAdminCompany {
  name: string;
  email: string;
  filled_info: boolean;
  contact_info: any;
}

export interface IAdminStudent {
  first_name: string;
  last_name: string;
  completed_profile: string;
  uni: string;
  degree: string;
}