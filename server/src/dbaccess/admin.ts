import {IMakeAdminDb} from 'interfaces/dbaccess/IAdminDb';
import {IAdminEntity} from 'interfaces/entities';

export const makeAdminDb: IMakeAdminDb = (makeDb) => {
  const findAll = async () => {
    const db = await makeDb();
    const res = db.collection('Admins').find({});
    return (await res.toArray()) as IAdminEntity[];
  };
  const findById = async ({_id}) => {
    const db = await makeDb();
    const res = await (db.collection('Admins').findOne({_id}));
    return res as IAdminEntity | null;    
  };
  const findByEmail = async ({email}) => {
    const db = await makeDb();
    const res = await (db.collection('Admins').findOne({email}));
    return res as IAdminEntity | null;
  }
  const insertOne = async ({...adminInfo}) => {
    const db = await makeDb();
    const res = await db.collection('Admins').insertOne({...adminInfo});
    return res.ops[0] as IAdminEntity;
  };
  return Object.freeze({
    findAll,
    findById,
    findByEmail, 
    insertOne
  });
}
export default makeAdminDb;