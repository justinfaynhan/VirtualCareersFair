import {IGetCompanyAnalytics} from 'interfaces/ICompany';

import {ICompanyDbAccess, IStudentDbAccess} from 'interfaces/dbaccess';
import {IAnalyticsFull, IAnalyticsPre} from 'interfaces/ICompany';

const makeGetCompanyAnalyticsData = (companyDb: ICompanyDbAccess, studentDb: IStudentDbAccess) => {
  const getCompanyAnalyticsData: IGetCompanyAnalytics = async (id) => {
    const company = await companyDb.findById({_id: id});
    if (!company) {
      throw new Error(`Error, could not find company with id ${id}.`);
    }
    if (!company.page_analytics) {
      return {
        data: []
      };
    
    } else {
      const data: IAnalyticsFull[] =  await ((company.page_analytics as IAnalyticsPre[]).reduce(async (results: any, analytic) => {
        const student = await studentDb.findById({_id: analytic.id});
        if (student === null) return results;
        return {
          id: analytic.id,
          created_at: analytic.created_at,
          first_name: student.first_name,
          last_name: student.last_name,
          about: student.about,
          skills: student.skills,
          uni: student.uni,
          degree: student.degree,
          resume_link: student.resume_link,
          linkedin_link: student.linkedin_link,
          github_link: student.github_link,
          portfolio_link: student.portfolio_link
        }
      }, []));
      return {
        data
      };
    };
  }
  return getCompanyAnalyticsData;
}

export default makeGetCompanyAnalyticsData;