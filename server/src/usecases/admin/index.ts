import makeCreateInvite from 'usecases/admin/create_invite.usecase';
import makeGetUsers from 'usecases/admin/get_users.usecase';
import makeUpdateWebsiteInfo from 'usecases/admin/update_website_info.usecase';

import {IInviteUser, IGetUsersList} from 'interfaces/IAdmin';
import {IUpdateDashboard} from 'interfaces/IDashboard';

export const createInvite: IInviteUser = makeCreateInvite(null);
export const getUsers: IGetUsersList = makeGetUsers(null);
export const updateWebsiteInfo: IUpdateDashboard = makeUpdateWebsiteInfo(null);
