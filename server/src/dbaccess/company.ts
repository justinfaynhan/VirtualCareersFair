import {IMakeCompanyDb} from 'interfaces/dbaccess/ICompanyDb';
import {ICompanyData} from 'interfaces/entities/ICompany.entity';

export const makeCompanyDb: IMakeCompanyDb = (makeDb) => {
  const findById = async ({_id}) => {
    const db = await makeDb();
    const res = await (db.collection('Companies').findOne({_id}));
    return res as ICompanyData | null;    
  };
  const findAll = async () => {
    const db = await makeDb();
    const res = db.collection('Companies').find({});
    return (await res.toArray()) as ICompanyData[];
  };
  const findByEmail = async ({email}) => {
    const db = await makeDb();
    const res = await (db.collection('Companies').findOne({email}));
    return res as ICompanyData | null;
  }
  const updateOne = async ({_id, ...companyInfo}) => {
    const db = await makeDb();
    const res = await db.collection('Companies').findOneAndUpdate({_id}, {$set: companyInfo}, {returnOriginal: false});
    return res.value as ICompanyData;
  };
  const insertOne = async ({...companyInfo}) => {
    const db = await makeDb();
    const res = await db.collection('Companies').insertOne({...companyInfo});
    return res.ops[0] as ICompanyData;
  };
  return Object.freeze({
    findById,
    findAll,
    findByEmail,
    updateOne,
    insertOne,
  })
};

export default makeCompanyDb;