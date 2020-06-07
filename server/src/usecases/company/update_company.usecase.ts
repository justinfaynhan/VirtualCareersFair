import {IUpdateCompanyInfo, ICompanyInfo} from 'interfaces/ICompany';
import {ICompanyDbAccess, IStudentDbAccess} from 'interfaces/dbaccess';
import {makeCompany} from 'entities';

const makeUpdateCompany = (companyDb: ICompanyDbAccess) => {
  const updateCompany: IUpdateCompanyInfo = async (id, info) => {
    const new_company = await makeCompany.Make({...info, _id: id});
    const res = await companyDb.updateOne(new_company);
    if (res === null) {
      throw new Error (`Error updating company ${res}.`);
    }
    return {
      id,
      email: res.email,
      name: res.name,
      slogan: res.slogan,
      overview: res.overview,
      graduate_stories: res.graduate_stories,
      video: res.video,
      website: res.website_link,
      contact_info: res.contact_email,
      banner_image: res.banner_image,
      logo_image: res.logo_image,
      taking_interns: res.taking_interns,
      taking_graduates: res.taking_graduates
    };
  }
  return updateCompany;
}

export default makeUpdateCompany;