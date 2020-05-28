import {IGetDashboard} from 'interfaces/IDashboard';

const makeGetWebsiteInfo = (websiteInfoDb) => {
  const getWebsiteInfo: IGetDashboard = async (type: string) => {
    return {
      instructions: 'any',
      about_us: 'any',
    }
  }
  return getWebsiteInfo;
}

export default makeGetWebsiteInfo;