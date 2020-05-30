import mongoose, {model} from 'mongoose';

import config from 'config';

import {IStudent, StudentSchema} from 'db/student.model';
import {IAdmin, AdminSchema} from 'db/admin.model';
import {ICompany, CompanySchema} from 'db/company.model';
import {IInfo, InfoSchema} from 'db/info.model';
import {IInvite, InviteSchema} from 'db/invite.model';

import {makeDb} from 'dbaccess';

export const setupDb = async () => {
  console.log('Setting up database...');

  const db = makeDb();
  db.on('error', (err) => {
    console.error(`Mongoose default connection experienced an error connecting: "${err}"`);
  });

  db.on('disconnected', () => {
    console.error('Mongoose default connection is disconnected');
  });

  process.on('SIGINT', () => {
    db.close(() => {
      console.log('Mongoose default connection is disconnected due to application termination');
      process.exit(0);
    })
  })

  db.on('connected', () => {
    console.log('Mongoose default connection is connected on: ' + config.DB.URL);
    db.model<IStudent>('Student', StudentSchema);
    db.model<IAdmin>('Admin', AdminSchema);
    db.model<ICompany>('Company', CompanySchema);
    db.model<IInfo>('Info', InfoSchema);
    db.model<IInvite>('Invite', InviteSchema);
    console.log('Mongoose models successfully created');
  });

}

export default setupDb;
