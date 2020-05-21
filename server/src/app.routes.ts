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

import makeCallback from 'callback';
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
  @Post()
  public async post(
    @Query() username: string,
    @Query() password: string,
    @Query() invite_code: string,
    @Query() token: string,
    @Request() request: express.Request
  ): Promise<any> {
    return Promise.resolve(makeCallback(register));
  }
}

@Route('login')
export class Login extends Controller {
  @Post()
  public async post(
    @Query() username: string,
    @Query() password: string,
    @Query() token: string,
    @Request() request: express.Request
  ): Promise<any> {
    return Promise.resolve(makeCallback(login));
  }
}

@Route('careersfair')
export class CareersFair extends Controller {
  @Get()
  public async get(
    @Query() token: string,
    @Request() request: express.Request
  ): Promise<any> {
    return Promise.resolve(makeCallback(getCareersFairLanding));
  }
  @Get('company/{id}')
  public async getCompany(
    @Query() token: string,
    @Path('id') id: string,
    @Request() request: express.Request
  ): Promise<any> {
    return Promise.resolve(makeCallback(getCompanyInfo));
  }
}

@Route('student')
export class Student extends Controller {
  @Get('{id}')
  public async get(
    @Query() token: string,
    @Path('id') id: string,
    @Request() request: express.Request
  ): Promise<any> {
    return Promise.resolve(makeCallback(getStudentProfile));
  }
  @Post('{id}')
  public async post(
    @Query() token: string,
    @Path('id') id: string,
    @Body() new_profile: {
      first_name: string;
      last_name: string;
      about: string;
      skills: any;
      uni: string;
      degree: string;
      resume_link?: string;
      linkedin_link?: string;
      github_link?: string;
      portfolio_link?: string;
    },
    @Request() request: express.Request
  ): Promise<any> {
    return Promise.resolve(makeCallback(updateStudentProfile));
  }
}

@Route('info')
export class DashboardInfo extends Controller {
  @Get('{type}')
  public async get(
    @Query() token: string,
    @Path('type') type: string,
    @Request() request: Express.Request
  ): Promise<any> {
    return Promise.resolve(makeCallback(getDashboardInfo));
  }
}

@Route('company')
export class Company extends Controller {
  @Put('{id}')
  public async put(
    @Query() token: string,
    @Path('id') id: string,
    @Request() request: Express.Request
  ): Promise<any> {
    return makeCallback(updateCompanyInfo);
  }
  @Get('{id}/analytics')
  public async getAnalytics(
    @Query() token: string,
    @Path('id') id: string,
    @Request() request: Express.Request
  ): Promise<any> {
    return Promise.resolve(makeCallback(getCompanyAnalytics));
  }
  @Get('{id}/analytics/download')
  public async getAnalyticsDownload(
    @Query() token: string,
    @Path('id') id: string,
    @Request() request: Express.Request
  ): Promise<any> {
    return Promise.resolve(makeCallback(getCompanyAnalyticsDownload));
  }
}

@Route('admin')
export class Admin extends Controller {
  @Put('users/{type}')
  public async getUsers(
    @Query() token: string,
    @Request() request: Express.Request
  ): Promise<any> {
    return makeCallback(getUsersList);
  }
  @Post('invite/{type}')
  public async postInvite(
    @Query() token: string,
    @Path('type') type: string,
    @Request() request: Express.Request
  ): Promise<any> {
    return Promise.resolve(makeCallback(inviteUser));
  }
  @Put('info/{type}')
  public async putInfo(
    @Query() token: string,
    @Path('type') type: string,
    @Request() request: Express.Request
  ): Promise<any> {
    return Promise.resolve(makeCallback(updateDashboardInfo));
  }
}