import {IUpdateCompanyInfo, ICompanyInfo} from 'interfaces/ICompany';
import {ICompanyDbAccess, IStudentDbAccess} from 'interfaces/dbaccess';
import {makeCompany} from 'entities';

const makeUpdateCompany = (companyDb: ICompanyDbAccess) => {
  const updateCompany: IUpdateCompanyInfo = async (id: string, info: ICompanyInfo) => {
    // working
    const new_company = await makeCompany.Make({...info});
    const res = await companyDb.updateOne({...new_company, _id: id});
    if (res === null) {
      throw new Error (`Error updating company ${res}.`);
    }
    return {
      id,
      email: res.email ? res.email : '',
      name: res.name ? res.name : undefined,
      slogan: res.slogan ? res.slogan : undefined,
      overview: res.overview ? res.overview : undefined,
      graduate_stories: res.graduate_stories ? res.graduate_stories : [],
      videos: res.video ? res.video : undefined,
      website: res.website_link ? res.website_link : undefined,
      contact_info: res.contact_email ? res.contact_email : undefined
    };
  //   return {
  //     id: 'sadsadsadsa',
  //     name: 'jojo',
  //     slogan: 'oraoraora',
  //     overview: 'bizzare adventures',
  //     graduate_stories: [{
  //       name: 'Johnny',
  //       role: 'CEO',
  //       summary: 'SWAG goes miles',
  //       story: 'once upon a time...'
  //     }],
  //     videos: 'www.youtube.com',
  //     website: 'www.google.com',
  //     contact_info: 'contact@google.com'
  //   }
  // }
  }
  return updateCompany;
}

export default makeUpdateCompany;