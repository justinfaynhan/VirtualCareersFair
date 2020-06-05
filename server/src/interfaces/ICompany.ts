export type IGetCompanyInfo = (id: string) => Promise<ICompanyInfo>;

export type IGetCompanyAnalyticsDownload = (id: string) => Promise<IAnalyticsFile>;

export type IGetCompanyAnalytics = (id: string) => Promise<ICompanyAnalytics>;

export type IUpdateCompanyInfo = (id: string, info: any) => Promise<ICompanyInfo>;

export interface ICompanyAnalytics {
  data: IAnalyticsPre[] | IAnalyticsFull[];
}

export type IAnalytics = IAnalyticsPre[] | IAnalyticsFull[];

export interface IAnalyticsPre {
  id: string;
  created_at: Date | string;
}

export interface IAnalyticsFull {
  id: string;
  created_at: Date | string;
  first_name?: string;
  last_name?: string;
  about?: string;
  skills?: Array<string>;
  uni?: string;
  degree?: string;
  resume_link?: string;
  linkedin_link?: string;
  github_link?: string;
  portfolio_link?: string;
}

export interface ICompanyAnalyticsDownload {
  file: IAnalyticsFile
}
export type IAnalyticsFile = any;

export interface IGraduateStory {
  name: string;
  role: string;
  summary: string;
  story: string;
}
export interface ICompanyInfo {
  id: string;
  name?: string;
  slogan?: string;
  overview?: any;
  graduate_stories: Array<IGraduateStory>;
  videos?: any;
  website?: string;
  contact_info?: any;
}