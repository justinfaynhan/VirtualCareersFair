import {IMakeDb} from 'interfaces/db';

export const makeUserDb = (makeDb: IMakeDb) => {
  const findAll = async () => {
    const db = await makeDb();
    const resAdmin = db.collection('Admins').find({});
    const resStudent = db.collection('Students').find({});
    const resCompany = db.collection('Companies').find({});
    return (
      (await resAdmin.toArray()).map(({_id: id, ...found}) => ({
      id,
      ...found
      })).concat(
        (await resStudent.toArray()).map(({_id: id, ...found}) => ({
          id,
          ...found
        })),
        (await resCompany.toArray()).map(({_id: id, ...found}) => ({
          id,
          ...found
        }))
    ));
  };
  const findById = async ({id: _id}) => {
    const db = await makeDb();
    const resAdmin = await (db.collection('Admins').findOne({_id}));
    const resStudent = await (db.collection('Admins').findOne({_id}));
    const resCompany = await (db.collection('Admins').findOne({_id}));

    return resAdmin | resStudent | resCompany;    
  };
  const findByEmail = async ({email}) => {
    const db = await makeDb();
    const resAdmin = await (db.collection('Admins').findOne({email}));
    const resStudent = await (db.collection('Admins').findOne({email}));
    const resCompany = await (db.collection('Admins').findOne({email}));

    return resAdmin | resStudent | resCompany;    
  }
  return Object.freeze({
    findAll,
    findById,
    findByEmail
  });
};

export default makeUserDb;