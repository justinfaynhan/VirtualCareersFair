import {IMakeDb} from 'interfaces/dbaccess';
import {IStudentEntity, IStudentData} from 'interfaces/entities/IStudent.entity';

export interface IStudentDbAccess {
  findAll: () => Promise<Array<IStudentData>>;
  findById: ({_id}: {_id: string}) => Promise<IStudentData | null>;
  findByEmail: ({email}: {email: string}) => Promise<IStudentData | null>;
  updateOne: ({}: IStudentEntity) => Promise<IStudentData | null>;
  insertOne: ({}: IStudentEntity) => Promise<IStudentData>;
}

export type IMakeStudentDb = (makeDb: IMakeDb) => IStudentDbAccess;