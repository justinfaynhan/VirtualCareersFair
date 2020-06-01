import {IGetCompanyInfo} from 'interfaces/ICompany';

const makeGetCompany = (companyDb) => {
  const getCompany: IGetCompanyInfo = async (id) => {
    return {
      id: 'sadsadsadsa',
      name: 'jojo',
      slogan: 'your next move is',
      overview: 'bizzare adventures',
      graduate_stories: [{
        name: 'Johnny',
        role: 'CEO',
        summary: 'SWAG goes miles',
        story: 'once upon a time...'
      }],
      videos: 'www.youtube.com',
      website: 'www.google.com',
      contact_info: 'contact@google.com'
    };
  }
  return getCompany;
}

export default makeGetCompany;