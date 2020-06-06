import {IBaseEntity} from 'interfaces/entities/IBase.entity'

export interface IInfoEntity extends IBaseEntity {
  about_us: string;
  student_instructions: string;
  company_instructions: string;
  admin_instructions: string;
}