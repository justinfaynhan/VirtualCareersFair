import {IGetCompanyAnalyticsDownload} from 'interfaces/ICompany';
import {ICompanyDbAccess, IStudentDbAccess} from 'interfaces/dbaccess';

const makeGetCompanyAnalyticsFile = (companyDb: ICompanyDbAccess, studentDb: IStudentDbAccess) => {
  const getCompanyAnalyticsFile: IGetCompanyAnalyticsDownload = async (id: string) => {
    return {
      file: 'file'
    }
  }
  return getCompanyAnalyticsFile;
}

export default makeGetCompanyAnalyticsFile;