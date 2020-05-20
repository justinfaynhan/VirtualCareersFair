export type IGetDashboard = (type: string) => IDashboard;

export type IUpdateDashboard = (type: string, dashboard: any) => IDashboard;

export interface IDashboard {
  instructions: any;
  about_us: any;
}