import {IGetCompanyAnalyticsDownload} from 'interfaces/ICompany';
import {ICompanyDbAccess, IStudentDbAccess} from 'interfaces/dbaccess';

import {create_csv_string} from 'utils/csv';

import {IGetCompanyAnalytics} from 'interfaces/ICompany';

import {ICompanyEntity} from 'interfaces/entities';

import {IAnalyticsFull, IAnalyticsPre} from 'interfaces/ICompany';

const makeGetCompanyAnalyticsFile = (companyDb: ICompanyDbAccess, studentDb: IStudentDbAccess) => {
  const getCompanyAnalyticsFile: IGetCompanyAnalyticsDownload = async (id: string) => {
    // working
    const company = await companyDb.findById({_id: id});
    if (!company) {
      throw new Error(`Error, could not find company with id ${id}.`);
    }
    if (!company.page_analytics) {
      throw new Error('Error, could not retrieve company analytics data.');
    
    } else {
      let file = '';
      const header = ['id', 'created_at', 'first_name', 'last_name', 'about', 'skills', 'uni', 'degree', 'resume_link', 'linkedin_link', 'github_link', 'portfolio_link'];

      // Go through page analytic entries and iteratively build up the 'file' csv string 
      const data = await ((company.page_analytics as IAnalyticsPre[]).reduce(async (results: any, analytic, i) => {
        const student = await studentDb.findById({_id: analytic.id});
        if (student === null) return results;
        const records = [{
          id: analytic.id,
          created_at: String(analytic.created_at),
          first_name: student.first_name ? student.first_name : undefined,
          last_name: student.last_name ? student.last_name : undefined,
          about: student.about ? student.about : undefined,
          skills: student.skills ? student.skills : [],
          uni: student.uni ? student.uni : undefined,
          degree: student.degree ? student.degree : undefined,
          resume_link: student.resume_link ? student.resume_link : undefined,
          linkedin_link: student.linkedin_link ? student.linkedin_link : undefined,
          github_link: student.github_link ? student.github_link : undefined,
          portfolio_link: student.portfolio_link ? student.portfolio_link : undefined
        }];
        file += await create_csv_string({header, records, displayHeader: i === 0});
      }, null));
      return {
        file
      };
    };
  }
  return getCompanyAnalyticsFile;
}

export default makeGetCompanyAnalyticsFile;