import {IGetDashboard} from 'interfaces/IDashboard';
import {IInfoDbAccess} from 'interfaces/dbaccess';

const makeGetWebsiteInfo = (websiteInfoDb: IInfoDbAccess) => {
  const getWebsiteInfo: IGetDashboard = async (type: string) => {
    const info = await websiteInfoDb.findOne();
    if (info === null) {
      throw new Error(`Error, unable to retrieve website info.`);
    }
    let instructions = '';
    if (type === 'ADMIN') {
      instructions = info.admin_instructions ? info.admin_instructions : '';
    } else if (type === 'COMPANY') {
      instructions = info.company_instructions ? info.company_instructions : '';
    } else if (type === 'STUDENT') {
      instructions = info.student_instructions ? info.student_instructions : '';
    } else {
      throw new Error (`Error, invalid type passed for website info: ${type}`);
    }
    return {
      instructions,
      about_us: info.about_us ? info.about_us : ''
    }
  }
  return getWebsiteInfo;
}

export default makeGetWebsiteInfo;