import makeUpdateCompany from 'usecases/company/update_company.usecase';
import makeGetCompanyAnalyticsData from 'usecases/company/get_company_analytics_data.usecase';
import makeGetCompanyAnalyticsFile from 'usecases/company/get_company_analytics_file.usecase';

import {IGetCompanyAnalytics, IUpdateCompanyInfo, IGetCompanyAnalyticsDownload} from 'interfaces/ICompany';

import {companyDb, studentDb} from 'dbaccess';

export const updateCompany: IUpdateCompanyInfo = makeUpdateCompany(companyDb);
export const getCompanyAnalyticsData: IGetCompanyAnalytics = makeGetCompanyAnalyticsData(companyDb, studentDb);
export const getCompanyAnalyticsFile: IGetCompanyAnalyticsDownload = makeGetCompanyAnalyticsFile(companyDb, studentDb);