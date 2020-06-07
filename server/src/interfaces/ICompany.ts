export type IGetCompanyInfo = (id: string) => Promise<ICompanyInfo>;

export type IGetCompanyAnalyticsDownload = (id: string) => Promise<ICompanyAnalyticsDownload>;

export type IGetCompanyAnalytics = (id: string) => Promise<ICompanyAnalytics>;

export type IUpdateCompanyInfo = (id: string, info: IUpdateCompanyInfoArgs) => Promise<ICompanyInfo>;

export interface ICompanyAnalytics {
  data: IAnalyticsFull[];
}

export interface IAnalyticsPre {
  id: string;
  created_at: string;
}

export interface IAnalyticsFull {
  id: string;
  created_at: string;
  first_name: string | null;
  last_name: string | null;
  about: any | null;
  skills: Array<string>;
  uni: string | null;
  degree: string | null;
  resume_link: string | null;
  linkedin_link: string | null;
  github_link: string | null;
  portfolio_link: string | null;
}

export interface ICompanyAnalyticsDownload {
  file: IAnalyticsFile
}
export type IAnalyticsFile = string;

export interface IGraduateStory {
  name: string;
  role: string;
  summary: string;
  story: string;
}

export interface IUpdateCompanyInfoArgs {
  name?: string;
  slogan?: string;
  overview?: any;
  graduate_stories?: IGraduateStory[];
  website_link?: string;
  contact_email?: string;
  video?: string;
  banner_image?: any;
  logo_image?: any;
  taking_interns?: boolean;
  taking_graduates?: boolean;
}

export interface ICompanyInfo {
  email: string;
  id: string;
  name: string | null;
  slogan: string | null;
  overview: any | null;
  graduate_stories: IGraduateStory[];
  website: string | null;
  contact_info: string | null;
  video: string | null;
  banner_image: any | null;
  logo_image: any | null;
  taking_interns: boolean | null;
  taking_graduates: boolean | null;
}