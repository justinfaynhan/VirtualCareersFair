import {IGetCompanyAnalytics} from 'interfaces/ICompany';

import {ICompanyDbAccess, IStudentDbAccess} from 'interfaces/dbaccess';
import {IAnalyticsFull, IAnalyticsPre} from 'interfaces/ICompany';

const makeGetCompanyAnalyticsData = (companyDb: ICompanyDbAccess, studentDb: IStudentDbAccess) => {
  const getCompanyAnalyticsData: IGetCompanyAnalytics = async (id: string) => {
    const company = await companyDb.findById({_id: id});
    if (!company) {
      throw new Error(`Error, could not find company with id ${id}.`);
    }
    if (!company.page_analytics) {
      return {
        data: []
      };
    
    } else {
      return {
        data: ((company.page_analytics as IAnalyticsPre[]).reduce(async (results: any, analytic) => {
          const student = await studentDb.findById({_id: analytic.id});
          if (student === null) return results;
          return {
            id: analytic.id,
            created_at: analytic.created_at,
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
          }
        }, []))
      };
    };

    // return {
    //   data: [{
    //     id: 'saudiewqurniewrew',
    //     created_at: '1/1/20',
    //     first_name: 'hihi',
    //     last_name: 'hehe',
    //     about: 'my name is hihi hehhe and I would like a job ty',
    //     skills: ['coding', 'talking', 'sitting', 'eating'],
    //     uni: 'matheletics',
    //     degree: 'bachelor of matheletics',
    //     resume_link: 'https://www.google.com',
    //     linkedin_link: 'https://www.linkedin.com',
    //     github_link: 'https://www.github.com',
    //     portfolio_link: 'https://www.hihihihehehe.io',
    //   }]
    // }
  }
  return getCompanyAnalyticsData;
}

export default makeGetCompanyAnalyticsData;