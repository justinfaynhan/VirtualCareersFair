export interface IBaseEntity {
  _id: string;
  created_at: string | null;
  updated_at: string | null;
}

export interface IBaseEntityMakeArgs {
  _id?: string;
  created_at?: string;
  updated_at?: string;
}

export interface IBaseData {
  _id: string;
  created_at: string;
  updated_at: string;
}