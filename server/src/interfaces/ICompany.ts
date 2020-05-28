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