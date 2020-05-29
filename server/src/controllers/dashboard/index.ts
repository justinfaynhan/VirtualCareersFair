import makeGetDashboardInfo from 'controllers/dashboard/get_dashboard.controller';

import {getWebsiteInfo} from 'usecases';

const getDashboardInfo = makeGetDashboardInfo(getWebsiteInfo);

const dashboardController = Object.freeze({
  getDashboardInfo
});

export default dashboardController;
export {getDashboardInfo};