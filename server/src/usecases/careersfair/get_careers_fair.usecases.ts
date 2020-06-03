import {IGetCareersFairLanding} from 'interfaces/ICareersFair';

import {ICompanyDbAccess} from 'interfaces/dbaccess';

import {ICompanyEntity} from 'interfaces/entities'

const makeGetCareersFair = (companyDb: ICompanyDbAccess) => {
  const getCareersFair: IGetCareersFairLanding = async () => {
    // working
    const all = ((await companyDb.findAll()) as ICompanyEntity[]);
    return {
      companies: all.map((company) => ({
        id: company._id,
        name: company.name,
        logo: company.logo_image,
        banner_image: company.banner_image,
        taking_interns: company.taking_interns,
        taking_graduates: company.taking_graduates
      }))
    }
    // return {
    //   companies: [{
    //     id: 'sadno321432131',
    //     name: 'Hi .Co',
    //     logo: 'pic.png',
    //     banner_image: 'pic.png',
    //     taking_interns: true,
    //     taking_graduates: true
    //   }]
    // }
  }
  return getCareersFair;
}

export default makeGetCareersFair;