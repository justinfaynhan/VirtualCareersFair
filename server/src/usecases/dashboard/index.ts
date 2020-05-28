import makeGetWebsiteInfo from 'usecases/dashboard/get_website_info.usecase';

import {IGetDashboard} from 'interfaces/IDashboard';

export const getWebsiteInfo: IGetDashboard = makeGetWebsiteInfo(null);
