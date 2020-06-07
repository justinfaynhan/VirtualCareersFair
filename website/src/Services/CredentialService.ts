import {
  UserAuthDetail,
  UserLoginCredentials,
  UserSignUpCredentials,
} from "../models/BindingModels";
import Cookies from "universal-cookie";
import Routes from "../routes/ApiRoutes";
import axios from "axios";

export default class CredentialService {
  credentialCookieName = "creds";
  cookieExpiryTime = 24;

  // Posts user's sign up request to '/register'
  // returns UserAuthDetail and save to cookies if successful
  // null if failure
  public async Register(model: UserSignUpCredentials): Promise<UserAuthDetail> {
    try {
      const routeFetcher = new Routes();
      const response = await axios.post(routeFetcher.getRegisterRoute(), model);
      const authDetail = new UserAuthDetail(
        model.username,
        response["body"]["user_token"]
      );
      this.SaveToCookies(authDetail);
      return authDetail;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  // Posts user's sign in request to '/login'
  // returns UserAuthDetail and save to cookies if successful
  // null if failure
  public async Login(model: UserLoginCredentials): Promise<UserAuthDetail> {
    try {
      const routeFetcher = new Routes();
      const response = await axios.post(routeFetcher.getLoginRoute(), model);
      const authDetail = new UserAuthDetail(
        model.username,
        response["body"]["user_token"]
      );
      this.SaveToCookies(authDetail);
      return authDetail;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  // saves user request to cookies
  // uni-cookies modules handles the stringify of details for us
  private SaveToCookies(details: UserAuthDetail): void {
    const cookies = new Cookies();
    let targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + this.cookieExpiryTime);
    // options for the cookie
    //      Path -> setting path to '/' allows cookie to be accessed everywhere
    //      expires -> datetime when cookie expires.
    const options = {
      path: "/",
      expires: targetDate,
    };
    cookies.set(this.credentialCookieName, details, options);
  }

  // get the cookies
  public GetUserCredentials(): UserAuthDetail {
    const cookies = new Cookies();
    return cookies.get(this.credentialCookieName);
  }
}
