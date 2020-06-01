import mongoose, {model} from 'mongoose';

import config from 'config';

import {makeDb} from 'dbaccess';
import {StudentSchema} from 'db/student.schema';
import {AdminSchema} from 'db/admin.schema';
import {CompanySchema} from 'db/company.schema';
import {InfoSchema} from 'db/info.schema';
import {InviteSchema} from 'db/invite.schema';

import {IStudent, IAdmin, ICompany, IInfo, IInvite} from 'interfaces/db';

export const setupDb = async () => {
  console.log('Setting up database...');

  const db = await makeDb();
  db.on('open', () => {
    console.log('Mongoose connection is connected on: ' + config.DB.URL);

    const Student = db.model<IStudent>('Student', StudentSchema, 'Students');
    const Admin = db.model<IAdmin>('Admin', AdminSchema, 'Admins');
    const Company = db.model<ICompany>('Company', CompanySchema, 'Companies');
    const Info = db.model<IInfo>('Info', InfoSchema, 'Infos');
    const Invite = db.model<IInvite>('Invite', InviteSchema, 'Invites');
    console.log('Mongoose connection successfully created model schemas');
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
