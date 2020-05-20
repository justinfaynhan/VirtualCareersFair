export type IGetCareersFairLanding = () => [ICareersFairLandingCompany];

export interface ICareersFairLandingCompany {
  name: string;
  logo: any;
  banner_image: any;
  taking_interns: boolean;
  taking_graduates: boolean;
}