import {IUpdateStudentProfile} from 'interfaces/IStudent';
import {IStudentDbAccess} from 'interfaces/dbaccess';
import {makeStudent} from 'entities';

const makeUpdateStudent = (studentDb: IStudentDbAccess) => {
  const updateStudent: IUpdateStudentProfile = async ({id, ...profile}) => {
    const student = await makeStudent.Make(profile);
    const res = await studentDb.updateOne({...student, _id: id});
    if (res === null) {
      throw new Error(`Error updating student with id ${id}.`);
    }
    return {
      id,
      first_name: res.first_name ? res.first_name : '',
      last_name: res.last_name ? res.last_name : '',
      about: res.about ? res.about : '',
      skills: res.skills ? res.skills : [],
      uni: res.uni ? res.uni : '',
      degree: res.degree ? res.degree : '',
      resume_link: res.resume_link ? res.resume_link : '',
      linkedin_link: res.linkedin_link ? res.linkedin_link : '',
      github_link: res.github_link ? res.github_link : '',
      portfolio_link: res.portfolio_link ? res.portfolio_link : '',
    }
  }
  return updateStudent;
}

export default makeUpdateStudent;