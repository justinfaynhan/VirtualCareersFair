import {IMakeUserDb} from 'interfaces/dbaccess/IUserDb';

export const makeUserDb: IMakeUserDb = (makeDb) => {
  const findAll = async ({types}) => {
    const db = await makeDb();
    const res = [];
    if (types.includes('ADMIN')) {
      const resAdmin = db.collection('Admins').find({});
      res.concat(
        (await resAdmin.toArray()).map(({_id: id, ...found}) => ({
          id,
          ...found
        }))
      )
    }
    if (types.includes('COMPANY')) {
      const resCompany = db.collection('Companies').find({});
      res.concat(
        (await resCompany.toArray()).map(({_id: id, ...found}) => ({
          id,
          ...found
        }))
      )
    }
    if (types.includes('STUDENT')) {
      const resStudent = db.collection('Students').find({});
      res.concat(
        (await resStudent.toArray()).map(({_id: id, ...found}) => ({
          id,
          ...found
        }))
      )
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