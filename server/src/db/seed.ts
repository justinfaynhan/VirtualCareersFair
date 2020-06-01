import mongoose, {model, Model} from 'mongoose';
import {IStudent, IAdmin, ICompany, IInfo, IInvite} from 'interfaces/db';
import {makeCompany, makeAdmin, makeInfo, makeInvite, makeStudent} from 'entities';

interface ISeedDb {
  Student: Model<IStudent>;
  Admin: Model<IAdmin>;
  Company: Model<ICompany>;
  Info: Model<IInfo>;
  Invite: Model<IInvite>;
}

export const seedDb = async ({Student, Admin, Company, Info, Invite}: ISeedDb) => {
  const test_students = [
    await makeStudent.Make({
      email: 'bobby@gmail.com', 
      password: 'secure', 
      first_name: 'bobby',
      last_name: 'lee',
      about: 'I want a job pls',
      skills: ['tall', 'handsome'],
      uni: 'University of Sydney',
      degree: 'Bachelor of Dropout',
      resume_link: 'www.google.com',
      linkedin_link: 'www.linkedin.com',
      github_link: 'www.github.com',
      portfolio_link: 'www.wordpress.com'
    }),
    await makeStudent.Make({
      email: 'jimmy_neutron@hotmail.com', 
      password: 'secure', 
      first_name: 'jimmy',
      last_name: 'neutron',
      about: 'Smart boi',
      skills: ['big brain', 'very smart', 'loves mum and dad'],
      uni: 'University of Harvard',
      degree: 'Bachelor of Nice',
      resume_link: 'www.google.com',
      linkedin_link: 'www.linkedin.com',
      github_link: 'www.github.com',
      portfolio_link: 'www.wordpress.com'
    }),
    await makeStudent.Make({
      email: 'saaaaap@hotmail.com', 
      password: 'saaaaaap', 
      first_name: 'saaaaaap',
      last_name: 'saaaaap',
      about: 'Saaaaaap',
      skills: ['whats saaaaaap?', 'nothing much, whats saaaaaaaap with you?'],
      uni: 'University of saaaaaap',
      degree: 'Bachelor of saaaaap',
      resume_link: 'www.google.com',
      linkedin_link: 'www.linkedin.com',
      github_link: 'www.github.com',
      portfolio_link: 'www.wordpress.com'
    }),
  ].forEach((student) => Student.create(student));

  const test_companies = [
    await makeCompany.Make({
      email: 'company@company.co', 
      password: 'secure', 
      name: 'company co',
      slogan: 'hi there', 
      overview: 'a very good company', 
      graduate_stories: [{
        name: 'Josh',
        role: 'Associate CEO',
        summary: 'live love laugh',
        story: 'hiiiiiiiiii',
      }],
      website_link: 'www.google.com',
      contact_email: 'hi@hi.com',
      video: 'zoom.com',
      banner_image: 'imgur.com',
      logo_image: 'imgur.com',
      taking_interns: true,
      taking_graduates: true,
      page_analytics: [{
        id: test_students[0]._id,
        created_at: new Date().toISOString()
      }, {
        id: test_students[1]._id,
        created_at: new Date().toISOString()
      }]
    }),
    await makeCompany.Make({
      email: 'startup@startup.co', 
      password: 'startup', 
      name: 'startup co',
      slogan: 'lets get started', 
      overview: 'we just starting up', 
      graduate_stories: [{
        name: 'Bob',
        role: 'Associate COOOOO',
        summary: 'live love laugh',
        story: 'hiiiiiiiiii',
      }],
      website_link: 'www.startup.com',
      contact_email: 'startup@hr.com',
      video: 'zoom.com',
      banner_image: 'imgur.com',
      logo_image: 'imgur.com',
      taking_interns: true,
      taking_graduates: true,
      page_analytics: [{
        id: test_students[0]._id,
        created_at: new Date().toISOString()
      }]
    }),
    await makeCompany.Make({
      email: 'zzz@zzz.co', 
      password: 'z', 
      name: 'z co',
      slogan: 'zzzzz', 
      overview: 'wzzzzz', 
      graduate_stories: [{
        name: 'ZZzzz',
        role: 'Associate zzzzz',
        summary: '8 hours a day',
        story: 'zzzz',
      }],
      website_link: 'www.zzz.com',
      contact_email: 'zzzz@hr.com',
      video: 'zoom.com',
      banner_image: 'imgur.com',
      logo_image: 'imgur.com',
      taking_interns: true,
      taking_graduates: true,
      page_analytics: []
    }),
    await makeCompany.Make({
      email: 'ok@ok.co', 
      password: 'okokokokokokokok', 
      name: 'ok co',
      slogan: 'striving for ok', 
      overview: 'its ok', 
      graduate_stories: [{
        name: 'Okeh',
        role: 'Associate ok',
        summary: 'ok',
        story: 'ok',
      }],
      website_link: 'www.ok.com',
      contact_email: 'ok@hr.com',
      video: 'zoom.com',
      banner_image: 'imgur.com',
      logo_image: 'imgur.com',
      taking_interns: true,
      taking_graduates: true,
      page_analytics: [{
        id: test_students[2]._id,
        created_at: new Date().toISOString()
      }]
    }),
  ].forEach((company) => Company.create(company));

  const test_admins = [makeAdmin.Make({
    email: 'admin@admin.com',
    password: 'iamadmin,somuchpower'
  })].forEach((admin) => Admin.create(admin));

}