import {Connection} from 'mongoose';

import {IAdmin} from 'interfaces/db/IAdmin.schema';
import {IStudent} from 'interfaces/db/IStudent.schema';
import {ICompany} from 'interfaces/db/ICompany.schema';
import {IInfo} from 'interfaces/db/IInfo.schema';
import {IInvite} from 'interfaces/db/IInvite.schema';

export type IMakeDb = () => Promise<Connection>;

export {IAdmin, IStudent, ICompany, IInfo, IInvite};