import {IMakeUserDb} from 'interfaces/dbaccess/IUserDb';
import {IAdminEntity, IStudentEntity, ICompanyEntity} from 'interfaces/entities';

export const makeUserDb: IMakeUserDb = (makeDb) => {
  const findAll = async ({types}) => {
    const db = await makeDb();
    let res = [];
    if (types.includes('ADMIN')) {
      const resAdmin = db.collection('Admins').find({});
      res = res.concat((await resAdmin.toArray() as any));
    }
    if (types.includes('COMPANY')) {
      const resCompany = db.collection('Companies').find({});
      res = res.concat((await resCompany.toArray() as any));
    }
    if (types.includes('STUDENT')) {
      const resStudent = db.collection('Students').find({});
      res = res.concat((await resStudent.toArray() as any));
    }
    return res as IAdminEntity[] | IStudentEntity[] | ICompanyEntity[];
  };
  const findById = async ({_id}) => {
    const db = await makeDb();
    const resAdmin = await (db.collection('Admins').findOne({_id}));
    const resStudent = await (db.collection('Admins').findOne({_id}));
    const resCompany = await (db.collection('Admins').findOne({_id}));

    return (resAdmin || resStudent || resCompany) as IAdminEntity | ICompanyEntity | IStudentEntity | null;    
  };
  const findByEmail = async ({email}) => {
    const db = await makeDb();
    const resAdmin = await (db.collection('Admins').findOne({email}));
    const resStudent = await (db.collection('Admins').findOne({email}));
    const resCompany = await (db.collection('Admins').findOne({email}));

    return (resAdmin || resStudent || resCompany) as IAdminEntity | ICompanyEntity | IStudentEntity | null;    
  }
  return Object.freeze({
    findAll,
    findById,
    findByEmail
  });
};

export default makeUserDb;