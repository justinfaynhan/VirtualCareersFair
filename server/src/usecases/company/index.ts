import makeUpdateCompany from 'usecases/company/update_company.usecase';
import makeGetCompanyAnalyticsData from 'usecases/company/get_company_analytics_data.usecase';
import makeGetCompanyAnalyticsFile from 'usecases/company/get_company_analytics_file.usecase';

import {IGetCompanyAnalytics, IUpdateCompanyInfo, IGetCompanyAnalyticsDownload} from 'interfaces/ICompany';

export const updateCompany: IUpdateCompanyInfo = makeUpdateCompany(null);
export const getCompanyAnalyticsData: IGetCompanyAnalytics = makeGetCompanyAnalyticsData(null);
export const getCompanyAnalyticsFile: IGetCompanyAnalyticsDownload = makeGetCompanyAnalyticsFile(null);