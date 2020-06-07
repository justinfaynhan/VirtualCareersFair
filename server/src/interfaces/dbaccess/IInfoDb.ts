import {IMakeDb} from 'interfaces/dbaccess';
import {IInfoEntity, IInfoData} from 'interfaces/entities/IInfo.entity';

export interface IInfoDbAccess {
  findOne: () => Promise<IInfoData | null>;
  upsertOne: ({}: IInfoEntity) => Promise<IInfoData>;
}

export type IMakeInfoDb = (makeDb: IMakeDb) => IInfoDbAccess;