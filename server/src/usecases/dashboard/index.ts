import makeGetWebsiteInfo from 'usecases/dashboard/get_website_info.usecase';

import {infoDb} from 'dbaccess'

import {IGetDashboard} from 'interfaces/IDashboard';

export const getWebsiteInfo: IGetDashboard = makeGetWebsiteInfo(infoDb);
