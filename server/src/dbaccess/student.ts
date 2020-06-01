import {IMakeStudentDb} from 'interfaces/dbaccess/IStudentDb';

export const makeStudentDb: IMakeStudentDb = (makeDb) => {
  const findById = async ({_id}) => {
    const db = await makeDb();
    const res = await (db.collection('Students').findOne({_id}));
    return res;    
  };
  const findAll = async () => {
    const db = await makeDb();
    const res = db.collection('Students').find({});
    return (await res.toArray()).map(({_id: id, ...found}) => ({
      id,
      ...found
    }))
  };
  const findByEmail = async ({email}) => {
    const db = await makeDb();
    const res = await (db.collection('Students').findOne({email}));
    return res;
  }
  const updateOne = async ({_id, ...studentInfo}) => {
    const db = await makeDb();
    const res = await db.collection('Students').findOneAndUpdate({_id}, studentInfo, {returnOriginal: false});
    return res;
  };
  const insertOne = async ({...studentInfo}) => {
    const db = await makeDb();
    const res = await db.collection('Students').insertOne({...studentInfo});
    return res.ops[0];
  };
  return Object.freeze({
    findById,
    findAll,
    findByEmail,
    updateOne,
    insertOne,
  })
};

export default makeStudentDb;