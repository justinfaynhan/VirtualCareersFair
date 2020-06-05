import {IMakeDb} from 'interfaces/dbaccess';
import {IInviteEntity} from 'interfaces/entities';

export interface IInviteDbAccess {
  findById: ({_id}: {_id: string}) => Promise<IInviteEntity | null>;
  findByCode: ({invite_code}: {invite_code: string}) => Promise<IInviteEntity | null>;
  insertOne: ({} : IInviteEntity) => Promise<IInviteEntity>;
  removeOne: ({_id}: {_id: string}) => Promise<number | undefined>;
}

export type IMakeInviteDb = (makeDb: IMakeDb) => IInviteDbAccess;