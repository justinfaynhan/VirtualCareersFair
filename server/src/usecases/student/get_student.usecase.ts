import {IGetStudentProfile} from 'interfaces/IStudent';
import {IStudentDbAccess} from 'interfaces/dbaccess';
const makeGetStudent = (studentDb: IStudentDbAccess) => {
  const getStudent: IGetStudentProfile = async (id: string) => {
    const student = await studentDb.findById({_id: id});
    if (student === null) {
      throw new Error (`Error retrieving student with id ${id}.`);
    }
    return {
      id,
      first_name: student.first_name ? student.first_name : '',
      last_name: student.last_name ? student.last_name : '',
      about: student.about ? student.about : '',
      skills: student.skills ? student.skills : [],
      uni: student.uni ? student.uni : '',
      degree: student.degree ? student.degree : '',
      resume_link: student.resume_link ? student.resume_link : '',
      linkedin_link: student.linkedin_link ? student.linkedin_link : '',
      github_link: student.github_link ? student.github_link : '',
      portfolio_link: student.portfolio_link ? student.portfolio_link : ''
    }
  }
  return getStudent;
}

export default makeGetStudent;