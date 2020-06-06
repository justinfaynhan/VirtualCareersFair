import makeGetStudent from 'usecases/student/get_student.usecase';
import makeUpdateStudent from 'usecases/student/update_student.usecase';

import {IGetStudentProfile, IUpdateStudentProfile} from 'interfaces/IStudent';
import {studentDb} from 'dbaccess';

export const getStudent: IGetStudentProfile = makeGetStudent(studentDb);
export const updateStudent: IUpdateStudentProfile = makeUpdateStudent(studentDb);