import {IMakeInviteDb} from 'interfaces/dbaccess/IInviteDb';

export const makeInviteDb: IMakeInviteDb = (makeDb) => {
  const findById = async ({id: _id}) => {
    const db = await makeDb();
    const res = await (db.collection('Invites').findOne({_id}));
    return res;    
  };
  const findByCode = async ({code}) => {
    const db = await makeDb();
    const res = await db.collection('Invites').findOne({code});
    return res;    
  };
  const insert = async ({...invite}) => {
    const db = await makeDb();
    const res = await db.collection('Invites').insertOne({...invite});
    return res;
  };
  const remove = async ({id: _id}) => {
    const db = await makeDb()
    const res = await db.collection('Invites').deleteOne({ _id })
    return res.deletedCount
  };
  return Object.freeze({
    findById,
    findByCode,
    insert,
    remove
  })
};

export default makeInviteDb;