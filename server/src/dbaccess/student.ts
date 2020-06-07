import {IMakeStudentDb} from 'interfaces/dbaccess/IStudentDb';
import {IStudentData} from 'interfaces/entities/IStudent.entity';

export const makeStudentDb: IMakeStudentDb = (makeDb) => {
  const findById = async ({_id}) => {
    const db = await makeDb();
    const res = await (db.collection('Students').findOne({_id}));
    return res as IStudentData | null;    
  };
  const findAll = async () => {
    const db = await makeDb();
    const res = db.collection('Students').find({});
    return (await res.toArray()) as IStudentData[];
  };
  const findByEmail = async ({email}) => {
    const db = await makeDb();
    const res = await (db.collection('Students').findOne({email}));
    return res as IStudentData | null;
  }
  const updateOne = async ({_id, ...studentInfo}) => {
    const db = await makeDb();
    const res = await db.collection('Students').findOneAndUpdate({_id}, {$set: studentInfo}, {returnOriginal: false});
    return res.value as IStudentData | null;
  };
  const insertOne = async ({...studentInfo}) => {
    const db = await makeDb();
    const res = await db.collection('Students').insertOne({...studentInfo});
    return res.ops[0] as IStudentData;
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