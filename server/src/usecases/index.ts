import {IGetUsersList, IInviteUser} from 'interfaces/IAdmin';
import {IGetDashboard, IUpdateDashboard} from 'interfaces/IDashboard';
import {ILogin, IRegister} from 'interfaces/IAuthentication';
import {IGetCareersFairLanding} from 'interfaces/ICareersFair';
import {IGetCompanyAnalytics, IGetCompanyInfo, IUpdateCompanyInfo, IGetCompanyAnalyticsDownload} from 'interfaces/ICompany';
import {IGetStudentProfile, IUpdateStudentProfile} from 'interfaces/IStudent';

export const addUser: IRegister = (username, password, invite_code) => 'SADINNEWIRPNEWRNI';

export const getUser: ILogin = (username, password) => 'NSAIDN#QI$13213219adsa';

export const getUsers: IGetUsersList = (type) => [{
  name: 'string',
  email: 'string',
  filled_info: true,
  contact_info: 'stub@stub.com',
}];

export const createInvite: IInviteUser = (type, email) => 'invite code';

export const updateWebsiteInfo: IUpdateDashboard = (type, dashboard) => ({
  instructions: 'any',
  about_us: 'any',
});

export const getStudent: IGetStudentProfile = (id) => ({
  first_name: 'hihi',
  last_name: 'hehe',
  about: 'my name is hihi hehhe and I would like a job ty',
  skills: ['coding', 'talking', 'sitting', 'eating'],
  uni: 'matheletics',
  degree: 'bachelor of matheletics',
  resume_link: 'https://www.google.com',
  linkedin_link: 'https://www.linkedin.com',
  github_link: 'https://www.github.com',
  portfolio_link: 'https://www.hihihihehehe.io',
});

export const getCareersFair: IGetCareersFairLanding = () => [{
  name: 'Hi .Co',
  logo: 'pic.png',
  banner_image: 'pic.png',
  taking_interns: true,
  taking_graduates: true
}];

export const getCompanyAnalyticsData: IGetCompanyAnalytics = (id) => [{
  first_name: 'hihi',
  last_name: 'hehe',
  about: 'my name is hihi hehhe and I would like a job ty',
  skills: ['coding', 'talking', 'sitting', 'eating'],
  uni: 'matheletics',
  degree: 'bachelor of matheletics',
  resume_link: 'https://www.google.com',
  linkedin_link: 'https://www.linkedin.com',
  github_link: 'https://www.github.com',
  portfolio_link: 'https://www.hihihihehehe.io',
}]

export const getCompanyAnalyticsFile: IGetCompanyAnalyticsDownload = (id) => 'file';

export const updateCompany: IUpdateCompanyInfo = (id, info) => ({
  id: 'sadsadsadsa',
  name: 'jojo',
  overview: 'bizzare adventures',
  graduate_stories: ['wow'],
  videos: 'www.youtube.com',
  website: 'www.google.com',
  contact_info: 'contact@google.com'
})

export const getWebsiteInfo: IGetDashboard = (type) => ({
  instructions: 'any',
  about_us: 'any',
})


export const updateStudent: IUpdateStudentProfile = (id, profile) => ({
  first_name: 'hihi',
  last_name: 'hehe',
  about: 'my name is hihi hehhe and I would like a job ty',
  skills: ['coding', 'talking', 'sitting', 'eating'],
  uni: 'matheletics',
  degree: 'bachelor of matheletics',
  resume_link: 'https://www.google.com',
  linkedin_link: 'https://www.linkedin.com',
  github_link: 'https://www.github.com',
  portfolio_link: 'https://www.hihihihehehe.io',
})

export const getCompany: IGetCompanyInfo = (id) => ({
  id: 'sadsadsadsa',
  name: 'jojo',
  overview: 'bizzare adventures',
  graduate_stories: ['wow'],
  videos: 'www.youtube.com',
  website: 'www.google.com',
  contact_info: 'contact@google.com'
})