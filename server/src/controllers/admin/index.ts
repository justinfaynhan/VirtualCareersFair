import makeGetUsersList from 'controllers/admin/get_users_list.controller';
import makeInviteUser from 'controllers/admin/invite_user.controller';
import makeUpdateDashboardInfo from 'controllers/admin/update_dashboard.controller';

import {getUsers, createInvite, updateWebsiteInfo} from 'usecases';

const getUsersList = makeGetUsersList(getUsers);
const inviteUser = makeInviteUser(createInvite);
const updateDashboardInfo = makeUpdateDashboardInfo(updateWebsiteInfo);
const adminController = Object.freeze({
  getUsersList,
  inviteUser,
  updateDashboardInfo
});

export default adminController;
export {getUsersList, inviteUser, updateDashboardInfo};