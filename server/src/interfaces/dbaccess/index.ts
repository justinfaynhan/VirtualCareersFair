import {Connection} from 'mongoose';

import {} from 'interfaces/dbaccess/IAdminDb';
import {} from 'interfaces/dbaccess/ICompanyDb';
import {} from 'interfaces/dbaccess/IInfoDb';
import {} from 'interfaces/dbaccess/IInviteDb';
import {} from 'interfaces/dbaccess/IStudentDb';
import {} from 'interfaces/dbaccess/IUserDb';

export type IMakeDb = () => Promise<Connection>;
