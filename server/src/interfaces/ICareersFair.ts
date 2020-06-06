export type IGetCareersFairLanding = () => Promise<ICareersFairLanding>;

export interface ICareersFairLanding {
  companies: Array<ICareersFairLandingCompany>
}

export interface ICareersFairLandingCompany {
  id: string,
  name: string;
  logo: any;
  banner_image: any;
  taking_interns: boolean | null;
  taking_graduates: boolean | null;
}