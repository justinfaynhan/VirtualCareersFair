import * as express from 'express';
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
  Request,
  Response,
  Put
} from "tsoa";

import makeCallback from 'utils/callback';
import {IHttpResponse} from 'interfaces/IHttp';
import {IStudentProfile} from 'interfaces/IStudent'

import {login, register} from 'controllers/authentication';
import {getCareersFairLanding, getCompanyInfo} from 'controllers/careersfair';
import {getUsersList, inviteUser, updateDashboardInfo} from 'controllers/admin';
import {getCompanyAnalytics, getCompanyAnalyticsDownload, updateCompanyInfo} from 'controllers/company';
import {getStudentProfile, updateStudentProfile} from 'controllers/student';
import {getDashboardInfo} from 'controllers/dashboard';

@Route('register')
export class Register extends Controller {
  /**Registers a new user. Depending on invite_code, user will have either 
   * student, company or admin privileges. The invite_code is expected to be 
   * generated and provided by a platform admin.
   */
  @Post()
  public async post(
    @Query() email: string,
    @Query() password: string,
    @Query() invite_code: string,
    @Request() request: express.Request
  ): Promise<any> {
    return makeCallback(register)(request);
  }
}

@Route('login')
export class Login extends Controller {
  /**Logs in a user into the platform. Depending on the account privilege type, 
   * will log the user into the appropriate interface.
   */
  @Post()
  public async post(
    @Query() email: string,
    @Query() password: string,
    @Request() request: express.Request
  ): Promise<any> {
    return makeCallback(login)(request);
  }
}

@Route('careersfair')
export class CareersFair extends Controller {
  /**Get the careers fair home page
   * 
   * Request user_token must be authorized as any account of any type.
   */
  @Get()
  public async get(
    @Query() user_token: string,
    @Request() request: express.Request
  ): Promise<any> {
    return makeCallback(getCareersFairLanding)(request);
  }
  /**Get a specific company landing page signed up to the careers fair.
   * 
   * Request user_token must be authorized as any account of any type.
   */
  @Get('company/:id')
  public async getCompany(
    @Query() user_token: string,
    @Path('id') id: string,
    @Request() request: express.Request
  ): Promise<any> {
    return makeCallback(getCompanyInfo)(request);
  }
}

@Route('info')
export class DashboardInfo extends Controller {
  /**Get the dashboard info interface associated with the requested type.
   * 
   * The requested {type} parameter must be of either ADMIN | STUDENT | 
   * COMPANY, which will be cross checked with the associated user_token user 
   * account privileges for authorization.
   * 
   * Only tokens authorized as admins can get the dashboard info of other 
   * account types.
   */
  @Get(':type')
  public async get(
    @Query() user_token: string,
    @Path('type') type: string,
    @Request() request: express.Request
  ): Promise<any> {
    return makeCallback(getDashboardInfo)(request);
  }
}

@Route('student')
export class Student extends Controller {
  /**Get a student's profile information.
   * 
   * Request user_token must be authorized as any account of any type.
   */
  @Get('{id}')
  public async get(
    @Query() user_token: string,
    @Path('id') id: string,
    @Request() request: express.Request
  ): Promise<any> {
    return makeCallback(getStudentProfile)(request);
  }
  /**Update a student's profile information.
   * 
   * Request user_token must be authorized as the student of same id.
   */
  @Put(':id')
  public async put(
    @Query() user_token: string,
    @Path('id') id: string,
    @Body() new_profile: {
      first_name?: string;
      last_name?: string;
      about?: string;
      skills?: string[];
      uni?: string;
      degree?: string;
      resume_link?: string;
      linkedin_link?: string;
      github_link?: string;
      portfolio_link?: string;
    },
    @Request() request: express.Request
  ): Promise<any> {
    return makeCallback(updateStudentProfile)(request);
  }
}

@Route('company')
export class Company extends Controller {
  /**Update a specific company landing page information.
   * 
   * Request user_token must be authorized as the company of same id. 
   */
  @Put(':id')
  public async put(
    @Query() user_token: string,
    @Path('id') id: string,
    @Body() new_info: {
      name?: string;
      slogan?: string;
      overview?: string;
      graduate_stories?: {
        name: string,
        role: string,
        summary: string,
        story: string
      }[];
      website?: string;
      contact_info?: string;
      videos?: string;
      banner_image?: string;
      logo_image?: string;
      taking_interns?: boolean;
      taking_graduates?: boolean;
    },
    @Request() request: express.Request
  ): Promise<any> {
    return makeCallback(updateCompanyInfo)(request);
  }
  /**Get a list of users that have browsed the company landing page.
   * 
   * Request user_token must be authorized as the company of same id. 
   */
  @Get(':id/analytics')
  public async getAnalytics(
    @Query() user_token: string,
    @Path('id') id: string,
    @Request() request: express.Request
  ): Promise<any> {
    console.log('hello');
    return makeCallback(getCompanyAnalytics)(request);
  }
  /**Download a .csv list of users that have browsed the company landing page.
   * 
   * Request user_token must be authorized as the company of same id. 
   */
  @Post(':id/analytics')
  public async postAnalyticsDownload(
    @Query() user_token: string,
    @Path('id') id: string,
    @Request() request: express.Request
  ): Promise<any> {
    return makeCallback(getCompanyAnalyticsDownload)(request);
  }
}

@Route('admin')
export class Admin extends Controller {
  /**Get all users of specified type registered on the platform.
   * 
   * The requested {type} parameter must be of either ADMIN | STUDENT | 
   * COMPANY.
   * 
   * Request user_token must be authorized as admin.
   */
  @Get('users/:type')
  public async getUsers(
    @Query() user_token: string,
    @Path('type') type: string,
    @Request() request: express.Request
  ): Promise<any> {
    return makeCallback(getUsersList)(request);
  }
  /**Generates a valid time-limited invite code which can be used to register 
   * an account on the platform with appropriate privileges. 
   * 
   * The requested {type} parameter must be of either ADMIN | STUDENT | 
   * COMPANY.
   * 
   * Request user_token must be authorized as admin.
   */
  @Post('invite/:type')
  public async postInvite(
    @Query() user_token: string,
    @Path('type') type: string,
    @Request() request: express.Request
  ): Promise<any> {
    return makeCallback(inviteUser)(request);
  }
  /**Update the dashboard info interface for a particular account type. 
   * 
   * The requested {type} parameter must be of either ADMIN | STUDENT | 
   * COMPANY.
   * 
   * Request user_token must be authorized as admin.
   */
  @Put('info/:type')
  public async putInfo(
    @Query() user_token: string,
    @Path('type') type: string,
    @Body() new_info: {
      instructions: string;
      about_us?: string;
    },
    @Request() request: express.Request
  ): Promise<any> {
    return makeCallback(updateDashboardInfo)(request);
  }
}