import {IGetCareersFairLanding} from 'interfaces/ICareersFair';

const makeGetCareersFair = (companyDb) => {
  const getCareersFair: IGetCareersFairLanding = async () => {
    return {
      companies: [{
        id: 'sadno321432131',
        name: 'Hi .Co',
        logo: 'pic.png',
        banner_image: 'pic.png',
        taking_interns: true,
        taking_graduates: true
      }]
    }
  }
  return getCareersFair;
}

export default makeGetCareersFair;