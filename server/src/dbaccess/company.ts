import {IMakeDb} from 'interfaces/db';

export const makeCompanyDb = (makeDb: IMakeDb) => {
  const findById = async ({id: _id}) => {
    const db = await makeDb();
    const res = await (db.collection('Companies').findOne({_id}));
    return res;    
  };
  const findAll = async () => {
    const db = await makeDb();
    const res = db.collection('Companies').find({});
    return (await res.toArray()).map(({_id: id, ...found}) => ({
      id,
      ...found
    }))
  };
  const findByEmail = async ({email}) => {
    const db = await makeDb();
    const res = await (db.collection('Companies').findOne({email}));
    return res;
  }
  const updateOne = async ({id: _id, ...companyInfo}) => {
    const db = await makeDb();
    const res = await db.collection('Companies').findOneAndUpdate({_id}, companyInfo, {returnOriginal: false});
    return res;
  };
  const insert = async ({...companyInfo}) => {
    const db = await makeDb();
    const res = await db.collection('Companies').insertOne({...companyInfo});
    return res;
  };
  return Object.freeze({
    findById,
    findAll,
    findByEmail,
    updateOne,
    insert,
  })
};

export default makeCompanyDb;