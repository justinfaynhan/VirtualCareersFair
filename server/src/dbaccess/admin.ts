import {IMakeAdminDb} from 'interfaces/dbaccess/IAdminDb';

export const makeAdminDb: IMakeAdminDb = (makeDb) => {
  const findAll = async () => {
    const db = await makeDb();
    const res = db.collection('Admins').find({});
    return (await res.toArray()).map(({_id: id, ...found}) => ({
      id,
      ...found
    }))
  };
  const findById = async ({_id}) => {
    const db = await makeDb();
    const res = await (db.collection('Admins').findOne({_id}));
    return res;    
  };
  const findByEmail = async ({email}) => {
    const db = await makeDb();
    const res = await (db.collection('Admins').findOne({email}));
    return res;
  }
  const insertOne = async ({...adminInfo}) => {
    const db = await makeDb();
    const res = await db.collection('Admins').insertOne({...adminInfo});
    return res;
  };
  return Object.freeze({
    findAll,
    findById,
    findByEmail, 
    insertOne
  });
}
export default makeAdminDb;