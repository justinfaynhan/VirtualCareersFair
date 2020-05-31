import {IMakeDb} from 'interfaces/dbaccess';
import {IInfoEntity} from 'interfaces/entities';

export interface IInfoDbAccess {
  find: () => any;
  upsert: ({}: IInfoEntity | any) => any;
}

export type IMakeInfoDb = (makeDb: IMakeDb) => IInfoDbAccess;