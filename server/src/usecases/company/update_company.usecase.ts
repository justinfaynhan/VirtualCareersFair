import {IUpdateCompanyInfo} from 'interfaces/ICompany';

const makeUpdateCompany = (companyDb) => {
  const updateCompany: IUpdateCompanyInfo = async (id: string, info) => {
    return {
      id: 'sadsadsadsa',
      name: 'jojo',
      slogan: 'oraoraora',
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
    }
  }
  return updateCompany;
}

export default makeUpdateCompany;