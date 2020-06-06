import {IUpdateDashboard} from 'interfaces/IDashboard';

import {IInfoDbAccess} from 'interfaces/dbaccess';
import {IInfoEntity} from 'interfaces/entities';

import {makeInfo} from 'entities/Info';

const makeUpdateWebsiteInfo = (websiteInfoDb: IInfoDbAccess) => {
  const updateWebsiteInfo: IUpdateDashboard = async (type, dashboard) => {
    if (type !== 'ADMIN' && type !== 'STUDENT' && type !== 'COMPANY') {
      throw new Error(`Error, provided type arg '${type} is invalid, must be STUDENT, ADMIN or COMPANY`);
    }
    const get_info = await websiteInfoDb.findOne();
    const new_info = await makeInfo.Make({
      about_us: dashboard.about_us,
      admin_instructions: type === 'ADMIN' ? dashboard.instructions : get_info && get_info.admin_instructions ? get_info.admin_instructions : undefined,
      student_instructions: type === 'STUDENT' ? dashboard.instructions : get_info && get_info.student_instructions ? get_info.student_instructions : undefined,
      company_instructions: type === 'COMPANY' ? dashboard.instructions : get_info && get_info.company_instructions ? get_info.company_instructions : undefined
    });
    if (get_info) {
      delete new_info.created_at;
    }
    const _id = get_info ? get_info._id : new_info._id;
    const updated_info = await websiteInfoDb.upsertOne({...new_info, _id});

    let instructions;
    if (type === 'ADMIN') instructions = updated_info.admin_instructions;
    if (type === 'COMPANY') instructions = updated_info.company_instructions;
    if (type === 'STUDENT') instructions = updated_info.student_instructions;
    return {
      instructions,
      about_us: updated_info.about_us ? updated_info.about_us : undefined
    };
  }
  return updateWebsiteInfo;
}

export default makeUpdateWebsiteInfo;