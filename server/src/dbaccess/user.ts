import {IMakeUserDb} from 'interfaces/dbaccess/IUserDb';

export const makeUserDb: IMakeUserDb = (makeDb) => {
  const findAll = async ({types}) => {
    const db = await makeDb();
    const res = [];
    if (types.includes('ADMIN')) {
      const resAdmin = db.collection('Admins').find({});
      res.push(...(await resAdmin.toArray()));
    }
    if (types.includes('COMPANY')) {
      const resCompany = db.collection('Companies').find({});
      res.push(...(await resCompany.toArray()));
    }
    if (types.includes('STUDENT')) {
      const resStudent = db.collection('Students').find({});
      res.push(...(await resStudent.toArray()));
    }
    return res;
  };
  const findById = async ({_id}) => {
    const db = await makeDb();
    const resAdmin = await (db.collection('Admins').findOne({_id}));
    const resStudent = await (db.collection('Admins').findOne({_id}));
    const resCompany = await (db.collection('Admins').findOne({_id}));

    return resAdmin || resStudent || resCompany;    
  };
  const findByEmail = async ({email}) => {
    const db = await makeDb();
    const resAdmin = await (db.collection('Admins').findOne({email}));
    const resStudent = await (db.collection('Admins').findOne({email}));
    const resCompany = await (db.collection('Admins').findOne({email}));

    return resAdmin || resStudent || resCompany;    
  }
  return Object.freeze({
    findAll,
    findById,
    findByEmail
  });
};

export default makeUserDb;