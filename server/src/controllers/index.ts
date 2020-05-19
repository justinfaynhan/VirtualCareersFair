import login from 'controllers/authentication/login.controller';
import register from 'controllers/authentication/register.controller';

import getCareersFairLanding from 'controllers/careersfair/get_careers_fair_landing.controller';
import getCompanyInfo from 'controllers/careersfair/get_company_info.controller';

import getStudentProfile from 'controllers/student/get_student_profile.controller';
import updateStudentProfile from 'controllers/student/update_student_profile.controller';

import getCompanyDashboard from 'controllers/company/get_company_dashboard.controller';
import getCompanyAnalytics from 'controllers/company/get_company_analytics.controller';
import getCompanyAnalyticsDownload from 'controllers/company/get_company_analytics_download.controller';
import updateCompanyInfo from 'controllers/company/update_company_info.controller';

import getAdminDashboard from 'controllers/admin/get_admin_dashboard.controller';
import getCompaniesList from 'controllers/admin/get_companies_list.controller';
import getStudentsList from 'controllers/admin/get_students_list.controller';

export {
  login,
  register,
  getCareersFairLanding,
  getCompanyInfo,
  getStudentProfile,
  updateStudentProfile,
  getCompanyDashboard,
  getCompanyAnalytics,
  getCompanyAnalyticsDownload,
  updateCompanyInfo,
  getAdminDashboard,
  getCompaniesList,
  getStudentsList
};
