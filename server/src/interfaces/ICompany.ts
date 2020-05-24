export type IGetCompanyInfo = (id: string) => ICompanyInfo;

export type IGetCompanyAnalyticsDownload = (id: string) => IAnalyticsFile;

export type IGetCompanyAnalytics = (id: string) => ICompanyAnalytics;

export type IUpdateCompanyInfo = (id: string, info: any) => ICompanyInfo;

export interface ICompanyAnalytics {
  data: [IAnalytics]
}

export interface ICompanyAnalyticsDownload {
  file: IAnalyticsFile
}

export interface IAnalytics {
  id: string;
  first_name: string;
  last_name: string;
  about: string;
  skills: any;
  uni: string;
  degree: string;
  resume_link?: string;
  linkedin_link?: string;
  github_link?: string;
  portfolio_link?: string;
}

export type IAnalyticsFile = any;

export interface ICompanyInfo {
  id: string;
  name: string;
  overview: any;
  graduate_stories: any;
  videos: any;
  website: string;
  contact_info: any;
}