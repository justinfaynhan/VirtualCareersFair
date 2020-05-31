import {IMakeDb} from 'interfaces/dbaccess';
import {IInfoEntity} from 'interfaces/entities';

export interface IInfoDbAccess {
  findOne: () => Promise<{[key: string]: any} | null>;
  upsertOne: ({}: IInfoEntity | {[key: string]: any}) => Promise<{[key: string]: any}>;
}

export type IMakeInfoDb = (makeDb: IMakeDb) => IInfoDbAccess;