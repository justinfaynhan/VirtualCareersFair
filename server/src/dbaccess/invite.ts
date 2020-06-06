import {IMakeInviteDb} from 'interfaces/dbaccess/IInviteDb';

export const makeInviteDb: IMakeInviteDb = (makeDb) => {
  const findById = async ({_id}) => {
    const db = await makeDb();
    const res = await (db.collection('Invites').findOne({_id}));
    return res;    
  };
  const findByCode = async ({invite_code}) => {
    const db = await makeDb();
    const res = await db.collection('Invites').findOne({invite_code});
    return res;    
  };
  const insertOne = async ({...invite}) => {
    const db = await makeDb();
    const res = await db.collection('Invites').insertOne({...invite});
    return res.ops[0];
  };
  const removeOne = async ({_id}) => {
    const db = await makeDb()
    const res = await db.collection('Invites').deleteOne({ _id })
    return res;
  };
  return Object.freeze({
    findById,
    findByCode,
    insertOne,
    removeOne
  })
};

export default makeInviteDb;