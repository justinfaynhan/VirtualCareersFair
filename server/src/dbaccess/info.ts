import {IMakeInfoDb} from 'interfaces/dbaccess/IInfoDb';

export const makeInfoDb: IMakeInfoDb = (makeDb) => {
  const find = async () => {
    const db = await makeDb();
    const res = await (db.collection('Infos').findOne({}));
    return res;
  };
  const upsert = async ({id: _id, ...info}) => {
    const db = await makeDb();
    const res = await db.collection('Companies').findOneAndUpdate({_id}, info, {returnOriginal: false, upsert: true});
    return res;
  };
  return Object.freeze({
    find,
    upsert
  })
};

export default makeInfoDb;