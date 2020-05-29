import mongoose, {model} from 'mongoose';

import config from 'config';

import {IStudent, StudentSchema} from 'db/student.model';
import {IAdmin, AdminSchema} from 'db/admin.model';
import {ICompany, CompanySchema} from 'db/company.model';
import {IInfo, InfoSchema} from 'db/info.model';
import {IInvite, InviteSchema} from 'db/invite.model';

export const setupDb = () => {
  console.log('Setting up database...');
  const db = mongoose.connection;
  mongoose.connect(config.DB.URL, config.DB.options);
  db.on('error', () => {
    console.error('db error connecting');
  });
  db.on('open', () => {
    console.log('db successfully connected');
    const Student = model<IStudent>('Student', StudentSchema);
    const Admin = model<IAdmin>('Admin', AdminSchema);
    const Company = model<ICompany>('Company', CompanySchema);
    const Info = model<IInfo>('Info', InfoSchema);
    const Invite = model<IInvite>('Invite', InviteSchema);
    console.log('db models successfully created');
  });
}

export default setupDb;
