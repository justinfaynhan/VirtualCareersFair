import {IBase} from 'interfaces/db/IBase.schema';

export interface IInfo extends IBase {
  about_us: string;
  student_instructions: string;
  company_instructions: string;
  admin_instructions: string;
}