import {IBaseEntity, IBaseEntityMakeArgs} from 'interfaces/entities/IBase.entity'

export interface IInfoEntity extends IBaseEntity {
  about_us: string | null;
  student_instructions: string | null;
  company_instructions: string | null;
  admin_instructions: string | null;
}

export interface IInfoEntityMakeArgs extends IBaseEntityMakeArgs {
  about_us?: string;
  student_instructions?: string;
  company_instructions?: string;
  admin_instructions?: string;
}