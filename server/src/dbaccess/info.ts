import {IMakeInfoDb} from 'interfaces/dbaccess/IInfoDb';

export const makeInfoDb: IMakeInfoDb = (makeDb) => {
  const findOne = async () => {
    const db = await makeDb();
    const res = await (db.collection('Infos').findOne({}));
    return res;
  };
  const upsertOne = async ({_id, ...info}) => {
    const db = await makeDb();
    const find_existing = await db.collection('Infos').findOne({_id});
    const res = await db.collection('Infos').findOneAndUpdate({_id}, {$set: info}, {returnOriginal: false, upsert: true});
    return res.value;
  };
  return Object.freeze({
    findOne,
    upsertOne
  })
};

export default makeInfoDb;