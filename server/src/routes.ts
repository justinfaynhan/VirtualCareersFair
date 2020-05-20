import * as express from 'express';

import makeCallback from 'callback';

import {login, register} from 'controllers/authentication';
import {getCareersFairLanding, getCompanyInfo} from 'controllers/careersfair';
import {getUsersList, inviteUser, updateDashboardInfo} from 'controllers/admin';
import {getCompanyAnalytics, getCompanyAnalyticsDownload, updateCompanyInfo} from 'controllers/company';
import {getStudentProfile, updateStudentProfile} from 'controllers/student';
import {getDashboardInfo} from 'controllers/dashboard';

const router = express.Router({mergeParams: true});

router.post('/register', makeCallback(register));
router.post('/login', makeCallback(login));

router.get('/careersfair', makeCallback(getCareersFairLanding));
router.get('/careersfair/company/:id', makeCallback(getCompanyInfo));

router.get('/student/:id', makeCallback(getStudentProfile));
router.put('/student/:id', makeCallback(updateStudentProfile));

router.get('/info/:type', makeCallback(getDashboardInfo));

router.put('/company/:id', makeCallback(updateCompanyInfo));
router.get('/company/:id/analytics', makeCallback(getCompanyAnalytics));
router.get('/company/:id/analytics/download', makeCallback(getCompanyAnalyticsDownload));

router.get('/admin/view/:type', makeCallback(getUsersList));
router.post('/admin/invite/:type', makeCallback(inviteUser));
router.post('/admin/info/:type', makeCallback(updateDashboardInfo));

export default router;