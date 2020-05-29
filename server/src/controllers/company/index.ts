import makeGetCompanyAnalyticsDownload from 'controllers/company/get_company_analytics_download.controller';
import makeGetCompanyAnalytics from 'controllers/company/get_company_analytics.controller';
import makeUpdateCompanyInfo from 'controllers/company/update_company_info.controller';

import {getCompanyAnalyticsData, getCompanyAnalyticsFile, updateCompany} from 'usecases';

const getCompanyAnalytics = makeGetCompanyAnalytics(getCompanyAnalyticsData);
const getCompanyAnalyticsDownload = makeGetCompanyAnalyticsDownload(getCompanyAnalyticsFile);
const updateCompanyInfo = makeUpdateCompanyInfo(updateCompany);

const companyController = Object.freeze({
  getCompanyAnalytics,
  getCompanyAnalyticsDownload,
  updateCompanyInfo
});

export default companyController;
export {getCompanyAnalytics, getCompanyAnalyticsDownload, updateCompanyInfo};