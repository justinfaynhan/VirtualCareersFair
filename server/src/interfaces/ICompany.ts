export type IGetCompanyInfo = (id: string) => Promise<ICompanyInfo>;

export type IGetCompanyAnalyticsDownload = (id: string) => Promise<IAnalyticsFile>;

export type IGetCompanyAnalytics = (id: string) => Promise<ICompanyAnalytics>;

export type IUpdateCompanyInfo = (id: string, info: any) => Promise<ICompanyInfo>;

export interface ICompanyAnalytics {
  data: Array<IAnalytics>
}

export interface ICompanyAnalyticsDownload {
  file: IAnalyticsFile
}

export interface IAnalytics {
  id: string;
  created_at: Date | string | number;
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
  name: string;
  slogan: string;
  overview: any;
  graduate_stories: Array<IGraduateStory>;
  videos: any;
  website: string;
  contact_info: any;
}