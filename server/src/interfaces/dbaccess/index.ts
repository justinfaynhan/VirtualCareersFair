import {Connection} from 'mongoose';

import {IAdminDbAccess, IMakeAdminDb} from 'interfaces/dbaccess/IAdminDb';
import {ICompanyDbAccess, IMakeCompanyDb} from 'interfaces/dbaccess/ICompanyDb';
import {IInfoDbAccess, IMakeInfoDb} from 'interfaces/dbaccess/IInfoDb';
import {IInviteDbAccess, IMakeInviteDb} from 'interfaces/dbaccess/IInviteDb';
import {IMakeStudentDb, IStudentDbAccess} from 'interfaces/dbaccess/IStudentDb';
import {IMakeUserDb, IUserDbAccess} from 'interfaces/dbaccess/IUserDb';

export type IMakeDb = () => Promise<Connection>;

export {
  IAdminDbAccess, 
  IMakeAdminDb, 
  ICompanyDbAccess, 
  IMakeCompanyDb, 
  IInfoDbAccess, 
  IMakeInfoDb, 
  IInviteDbAccess, 
  IMakeInviteDb, 
  IMakeStudentDb, 
  IStudentDbAccess, 
  IMakeUserDb, 
  IUserDbAccess
}
