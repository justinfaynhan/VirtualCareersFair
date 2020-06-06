export type IGetDashboard = (type: string) => Promise<IDashboard>;

export type IUpdateDashboard = (type: string, dashboard: IDashboard) => Promise<IDashboard>;

export interface IDashboard {
  instructions: string;
  about_us?: string;
}