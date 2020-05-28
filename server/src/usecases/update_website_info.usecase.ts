import {IUpdateDashboard} from 'interfaces/IDashboard';

const makeUpdateWebsiteInfo = (websiteInfoDb) => {
  const updateWebsiteInfo: IUpdateDashboard = async (type: string, dashboard: any) => {
    return {
      instructions: 'any',
      about_us: 'any',
    }
  }
  return updateWebsiteInfo;
}

export default makeUpdateWebsiteInfo;