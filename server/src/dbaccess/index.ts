import makeAdminDb from 'dbaccess/admin';
import makeCompanyDb from 'dbaccess/company';
import makeInfoDb from 'dbaccess/info';
import makeInviteDb from 'dbaccess/invite';
import makeStudentDb from 'dbaccess/student';
import makeUserDb from 'dbaccess/user';

const makeDb = () => {

}

export const adminDb = makeAdminDb(makeDb);
export const companyDb = makeCompanyDb(makeDb);
export const infoDb = makeInfoDb(makeDb);
export const inviteDb = makeInviteDb(makeDb);
export const studentDb = makeStudentDb(makeDb);
export const userDb = makeUserDb(makeDb); 