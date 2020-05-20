import {login, register} from 'controllers/authentication';
import {getCareersFairLanding, getCompanyInfo} from 'controllers/careersfair'
import {getStudentProfile, updateStudentProfile} from 'controllers/student';
import {getCompanyAnalytics, getCompanyAnalyticsDownload, updateCompanyInfo} from 'controllers/company';
import {inviteUser, getUsersList, updateDashboard} from 'controllers/admin';
import getDashboard from 'controllers/dashboard'

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
  getDashboard,
  getUsersList,
  updateDashboard,
  inviteUser
};
