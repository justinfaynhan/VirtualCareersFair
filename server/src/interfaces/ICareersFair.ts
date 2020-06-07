export type IGetCareersFairLanding = () => Promise<ICareersFairLanding>;

export interface ICareersFairLanding {
  companies: Array<ICareersFairLandingCompany>
}

export interface ICareersFairLandingCompany {
  id: string,
  name: string | null;
  logo: any | null;
  banner_image: any | null;
  taking_interns: boolean | null;
  taking_graduates: boolean | null;
}