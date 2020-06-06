import {IMakeStudentDb} from 'interfaces/dbaccess/IStudentDb';
import {IStudentEntity} from 'interfaces/entities';

export const makeStudentDb: IMakeStudentDb = (makeDb) => {
  const findById = async ({_id}) => {
    const db = await makeDb();
    const res = await (db.collection('Students').findOne({_id}));
    return res as IStudentEntity | null;    
  };
  const findAll = async () => {
    const db = await makeDb();
    const res = db.collection('Students').find({});
    return (await res.toArray()) as IStudentEntity[];
  };
  const findByEmail = async ({email}) => {
    const db = await makeDb();
    const res = await (db.collection('Students').findOne({email}));
    return res as IStudentEntity | null;
  }
  const updateOne = async ({_id, ...studentInfo}) => {
    const db = await makeDb();
    const res = await db.collection('Students').findOneAndUpdate({_id}, {$set: studentInfo}, {returnOriginal: false});
    return res.value as IStudentEntity | null;
  };
  const insertOne = async ({...studentInfo}) => {
    const db = await makeDb();
    const res = await db.collection('Students').insertOne({...studentInfo});
    return res.ops[0] as IStudentEntity;
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