import {IUpdateCompanyInfo, ICompanyInfo} from 'interfaces/ICompany';
import {ICompanyDbAccess, IStudentDbAccess} from 'interfaces/dbaccess';
import {makeCompany} from 'entities';

const makeUpdateCompany = (companyDb: ICompanyDbAccess) => {
  const updateCompany: IUpdateCompanyInfo = async (id: string, info: ICompanyInfo) => {
    const new_company = await makeCompany.Make({...info});
    const res = await companyDb.updateOne({...new_company, _id: id});
    if (res === null) {
      throw new Error (`Error updating company ${res}.`);
    }
    return {
      id,
      email: res.email ? res.email : '',
      name: res.name ? res.name : '',
      slogan: res.slogan ? res.slogan : '',
      overview: res.overview ? res.overview : '',
      graduate_stories: res.graduate_stories ? res.graduate_stories : [],
      videos: res.video ? res.video : '',
      website: res.website_link ? res.website_link : '',
      contact_info: res.contact_email ? res.contact_email : ''
    };
  }
  return updateCompany;
}

export default makeUpdateCompany;