import mongoose from 'mongoose';
import config from 'config';

import makeAdminDb from 'dbaccess/admin';
import makeCompanyDb from 'dbaccess/company';
import makeInfoDb from 'dbaccess/info';
import makeInviteDb from 'dbaccess/invite';
import makeStudentDb from 'dbaccess/student';
import makeUserDb from 'dbaccess/user';

const makeDb = () => {
  const db = mongoose.connection;
  const connected = 1;
  if (db.readyState !== connected) {
    mongoose.connect(config.DB.URL, config.DB.options);
  }
  db.on('error', () => {
    console.error('db error connecting');
  });
  db.on('open', () => {
    console.log('db successfully connected');
  });
}

export const adminDb = makeAdminDb(makeDb);
export const companyDb = makeCompanyDb(makeDb);
export const infoDb = makeInfoDb(makeDb);
export const inviteDb = makeInviteDb(makeDb);
export const studentDb = makeStudentDb(makeDb);
export const userDb = makeUserDb(makeDb); 