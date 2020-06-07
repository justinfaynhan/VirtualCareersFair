export type IGetDashboard = (type: string) => Promise<IDashboard>;

export type IUpdateDashboard = (type: string, dashboard: IDashboardArgs) => Promise<IDashboard>;

export interface IDashboardArgs {
  instructions: string;
  about_us?: string;
}

export interface IDashboard {
  instructions: string | null;
  about_us: string | null;
}