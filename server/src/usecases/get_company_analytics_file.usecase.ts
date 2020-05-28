import {IGetCompanyAnalyticsDownload} from 'interfaces/ICompany';

const makeGetCompanyAnalyticsFile = (companyDb) => {
  const getCompanyAnalyticsFile: IGetCompanyAnalyticsDownload = async (id: string) => {
    return {
      file: 'file'
    }
  }
  return getCompanyAnalyticsFile;
}

export default makeGetCompanyAnalyticsFile;