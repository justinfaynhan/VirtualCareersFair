import {IMakeDb} from 'interfaces/dbaccess';
import {IStudentEntity} from 'interfaces/entities';

export interface IStudentDbAccess {
  findAll: () => any;
  findById: ({id}) => any;
  findByEmail: ({email}) => any;
  updateOne: ({}: IStudentEntity | any) => any;
  insert: ({}: IStudentEntity | any) => any;
}

export type IMakeStudentDb = (makeDb: IMakeDb) => IStudentDbAccess;