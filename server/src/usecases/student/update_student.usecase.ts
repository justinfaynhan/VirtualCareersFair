import {IUpdateStudentProfile} from 'interfaces/IStudent';

const makeUpdateStudent = (userDb) => {
  const updateStudent: IUpdateStudentProfile = async (id, profile) => {
    return {
      id: 'sadjnwqnjewnrewrew',
      first_name: 'hihi',
      last_name: 'hehe',
      about: 'my name is hihi hehhe and I would like a job ty',
      skills: ['coding', 'talking', 'sitting', 'eating'],
      uni: 'matheletics',
      degree: 'bachelor of matheletics',
      resume_link: 'https://www.google.com',
      linkedin_link: 'https://www.linkedin.com',
      github_link: 'https://www.github.com',
      portfolio_link: 'https://www.hihihihehehe.io',
    };
  }
  return updateStudent;
}

export default makeUpdateStudent;