import {IMakeDb} from 'interfaces/dbaccess';
import {IInviteEntity} from 'interfaces/entities';

export interface IInviteDbAccess {
  findById: ({id}) => any;
  findByCode: ({code}) => any;
  insert: ({} : IInviteEntity | any) => any;
  remove: ({id}) => any;
}

export type IMakeInviteDb = (makeDb: IMakeDb) => IInviteDbAccess;