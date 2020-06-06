import {IMakeDb} from 'interfaces/dbaccess';
import {IInviteEntity} from 'interfaces/entities';

export interface IInviteDbAccess {
  findById: ({_id}: {_id: string}) => Promise<{[key: string]: any} | null>;
  findByCode: ({invite_code}: {invite_code: string}) => Promise<{[key: string]: any} | null>;
  insertOne: ({} : IInviteEntity | {[key: string]: any}) => Promise<{[key: string]: any}>;
  removeOne: ({_id}: {_id: string}) => Promise<{[key: string]: any} | null>;
}

export type IMakeInviteDb = (makeDb: IMakeDb) => IInviteDbAccess;