import {IGetUsersList, IInviteUser} from 'interfaces/IAdmin';
import {IGetDashboard, IUpdateDashboard} from 'interfaces/IDashboard';
import {ILogin, IRegister} from 'interfaces/IAuthentication';
import {IGetCareersFairLanding} from 'interfaces/ICareersFair';
import {IGetCompanyAnalytics, IGetCompanyInfo, IUpdateCompanyInfo, IGetCompanyAnalyticsDownload} from 'interfaces/ICompany';
import {IGetStudentProfile, IUpdateStudentProfile} from 'interfaces/IStudent';

import makeRegisterUser from 'usecases/register_user.usecase';
import makeLoginUser from 'usecases/login_user.usecase';

import makeGetCareersFair from 'usecases/get_careers_fair.usecases';
import makeGetWebsiteInfo from 'usecases/get_website_info.usecase';

import makeGetStudent from 'usecases/get_student.usecase';
import makeUpdateStudent from 'usecases/update_student.usecase';

import makeGetCompany from 'usecases/get_company.usecase';
import makeUpdateCompany from 'usecases/update_company.usecase';
import makeGetCompanyAnalyticsData from 'usecases/get_company_analytics_data.usecase';
import makeGetCompanyAnalyticsFile from 'usecases/get_company_analytics_file.usecase';

import makeCreateInvite from 'usecases/create_invite.usecase';
import makeUpdateWebsiteInfo from 'usecases/update_website_info.usecase';
import makeGetUsers from 'usecases/get_users.usecase';


export const registerUser: IRegister = makeRegisterUser(null, null);
export const loginUser: ILogin = makeLoginUser(null);

export const getCareersFair: IGetCareersFairLanding = makeGetCareersFair(null);
export const getWebsiteInfo: IGetDashboard = makeGetWebsiteInfo(null);

export const getStudent: IGetStudentProfile = makeGetStudent(null);
export const updateStudent: IUpdateStudentProfile = makeUpdateStudent(null);

export const getCompany: IGetCompanyInfo = makeGetCompany(null);
export const updateCompany: IUpdateCompanyInfo = makeUpdateCompany(null);
export const getCompanyAnalyticsData: IGetCompanyAnalytics = makeGetCompanyAnalyticsData(null);
export const getCompanyAnalyticsFile: IGetCompanyAnalyticsDownload = makeGetCompanyAnalyticsFile(null);

export const createInvite: IInviteUser = makeCreateInvite(null);
export const updateWebsiteInfo: IUpdateDashboard = makeUpdateWebsiteInfo(null);
export const getUsers: IGetUsersList = makeGetUsers(null);