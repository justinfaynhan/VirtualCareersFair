import {IMakeDb} from 'interfaces/dbaccess';
import {IInfoEntity} from 'interfaces/entities';

export interface IInfoDbAccess {
  findOne: () => Promise<IInfoEntity | null>;
  upsertOne: ({}: IInfoEntity) => Promise<IInfoEntity>;
}

export type IMakeInfoDb = (makeDb: IMakeDb) => IInfoDbAccess;