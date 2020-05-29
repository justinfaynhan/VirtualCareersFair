import makeGetStudentProfile from 'controllers/student/get_student_profile.controller';
import makeUpdateStudentProfile from 'controllers/student/update_student_profile.controller';

import {getStudent, updateStudent} from 'usecases';

const getStudentProfile = makeGetStudentProfile(getStudent);

const updateStudentProfile = makeUpdateStudentProfile(updateStudent);

const studentController = Object.freeze({
  getStudentProfile,
  updateStudentProfile
});

export default studentController;
export {getStudentProfile, updateStudentProfile};