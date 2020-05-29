export type IGetDashboard = (type: string) => Promise<IDashboard>;

export type IUpdateDashboard = (type: string, dashboard: any) => Promise<IDashboard>;

export interface IDashboard {
  instructions: any;
  about_us: any;
}