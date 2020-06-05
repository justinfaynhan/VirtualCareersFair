import {IMakeInviteDb} from 'interfaces/dbaccess/IInviteDb';
import {IInviteEntity} from 'interfaces/entities';

export const makeInviteDb: IMakeInviteDb = (makeDb) => {
  const findById = async ({_id}) => {
    const db = await makeDb();
    const res = await (db.collection('Invites').findOne({_id}));
    return res as IInviteEntity | null;    
  };
  const findByCode = async ({invite_code}) => {
    const db = await makeDb();
    const res = await db.collection('Invites').findOne({invite_code});
    return res as IInviteEntity | null;    
  };
  const insertOne = async ({...invite}) => {
    const db = await makeDb();
    const res = await db.collection('Invites').insertOne({...invite});
    return res.ops[0] as IInviteEntity;
  };
  const removeOne = async ({_id}) => {
    const db = await makeDb()
    const res = await db.collection('Invites').deleteOne({ _id })
    return res.deletedCount;
  };
  return Object.freeze({
    findById,
    findByCode,
    insertOne,
    removeOne
  })
};

export default makeInviteDb;