import makeGetStudent from 'usecases/student/get_student.usecase';
import makeUpdateStudent from 'usecases/student/update_student.usecase';

import {IGetStudentProfile, IUpdateStudentProfile} from 'interfaces/IStudent';

export const getStudent: IGetStudentProfile = makeGetStudent(null);
export const updateStudent: IUpdateStudentProfile = makeUpdateStudent(null);