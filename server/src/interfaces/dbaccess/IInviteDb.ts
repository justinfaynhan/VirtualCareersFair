import {IMakeDb} from 'interfaces/dbaccess';
import {IInviteEntity, IInviteData} from 'interfaces/entities/IInvite.entity';

export interface IInviteDbAccess {
  findById: ({_id}: {_id: string}) => Promise<IInviteData | null>;
  findByCode: ({invite_code}: {invite_code: string}) => Promise<IInviteData | null>;
  insertOne: ({} : IInviteEntity) => Promise<IInviteData>;
  removeOne: ({_id}: {_id: string}) => Promise<number | undefined>;
}

export type IMakeInviteDb = (makeDb: IMakeDb) => IInviteDbAccess;