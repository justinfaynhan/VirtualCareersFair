import {IMakeInfoDb} from 'interfaces/dbaccess/IInfoDb';
import {IInfoData} from 'interfaces/entities/IInfo.entity';

export const makeInfoDb: IMakeInfoDb = (makeDb) => {
  const findOne = async () => {
    const db = await makeDb();
    const res = await (db.collection('Infos').findOne({}));
    return res as IInfoData | null;
  };
  const upsertOne = async ({_id, ...info}) => {
    const db = await makeDb();
    const res = await db.collection('Infos').findOneAndUpdate({_id}, {$set: info}, {returnOriginal: false, upsert: true});
    return res.value as IInfoData;
  };
  return Object.freeze({
    findOne,
    upsertOne
  })
};

export default makeInfoDb;