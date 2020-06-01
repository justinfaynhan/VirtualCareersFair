import config from 'config';

import {makeDb} from 'dbaccess';
import {StudentSchema} from 'db/student.schema';
import {AdminSchema} from 'db/admin.schema';
import {CompanySchema} from 'db/company.schema';
import {InfoSchema} from 'db/info.schema';
import {InviteSchema} from 'db/invite.schema';

import {IStudent, IAdmin, ICompany, IInfo, IInvite} from 'interfaces/db';
import {makeAdmin} from 'entities';

import {seedDb} from 'db/seed';

export const setupDb = async () => {
  console.log('Setting up database...');

  const db = await makeDb();
  db.on('open', async () => {
    console.log('Mongoose connection is connected on: ' + config.DB.URL);

    const Student = db.model<IStudent>('Student', StudentSchema, 'Students');
    const Admin = db.model<IAdmin>('Admin', AdminSchema, 'Admins');
    const Company = db.model<ICompany>('Company', CompanySchema, 'Companies');
    const Info = db.model<IInfo>('Info', InfoSchema, 'Infos');
    const Invite = db.model<IInvite>('Invite', InviteSchema, 'Invites');
    console.log('Mongoose connection successfully created model schemas');

    const default_admin_account = await makeAdmin.Make({email: config.ADMIN.default.EMAIL, password: config.ADMIN.default.PASSWORD});
    try {
      const res = await Admin.create(default_admin_account);
      console.log(res);
      console.log('Created default admin account with email: ' + config.ADMIN.default.EMAIL);
    } catch(e) {
      console.log('Error creating default admin role: ' + e);
    }
    seedDb({Student, Admin, Company, Info, Invite});
  });

  db.on('error', (err) => {
    console.error(`Mongoose default connection experienced an error connecting: "${err}"`);
  });

  db.on('disconnected', () => {
    console.error('Mongoose connection is disconnected');
  });

  process.on('SIGINT', () => {
    db.close(() => {
      console.log('Mongoose connection is disconnected due to application termination');
      process.exit(0);
    })
  });

  db.openUri(config.DB.URL, config.DB.options);
}

export default setupDb;
