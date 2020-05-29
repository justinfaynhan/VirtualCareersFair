import {login, register} from 'controllers/authentication';
import {getCareersFairLanding, getCompanyInfo} from 'controllers/careersfair'
import {getStudentProfile, updateStudentProfile} from 'controllers/student';
import {getCompanyAnalytics, getCompanyAnalyticsDownload, updateCompanyInfo} from 'controllers/company';
import {inviteUser, getUsersList, updateDashboardInfo} from 'controllers/admin';
import {getDashboardInfo} from 'controllers/dashboard'

export {
  login,
  register,
  getCareersFairLanding,
  getCompanyInfo,
  getStudentProfile,
  updateStudentProfile,
  getCompanyAnalytics,
  getCompanyAnalyticsDownload,
  updateCompanyInfo,
  getDashboardInfo,
  getUsersList,
  updateDashboardInfo,
  inviteUser
};
