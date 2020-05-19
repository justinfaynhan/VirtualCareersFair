import * as express from 'express';

import makeCallback from 'callback';
import {
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
} from 'controllers';

const router = express.Router({mergeParams: true});

router.post('/register', makeCallback(register));
router.post('/login', makeCallback(login));

router.get('/careersfair', makeCallback(getCareersFairLanding));
router.get('/careersfair/company/:id', makeCallback(getCompanyInfo));

router.get('/student/:id', makeCallback(getStudentProfile));
router.put('/student/:id', makeCallback(updateStudentProfile));

router.get('/company', makeCallback(getCompanyDashboard));
router.put('/company/:id', makeCallback(updateCompanyInfo));
router.get('/company/:id/analytics', makeCallback(getCompanyAnalytics));
router.get('/company/:id/analytics/download', makeCallback(getCompanyAnalyticsDownload));

router.get('/admin', makeCallback(getAdminDashboard));
router.get('/admin/students', makeCallback(getStudentsList));
router.get('/admin/companies', makeCallback(getCompaniesList));

export default router;