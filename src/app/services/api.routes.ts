import { ENVIRONMENT } from '../../environments/environment';

// api routes
export const APIRoute = {
  login: () => {
    return `${ENVIRONMENT.API_ENDPOINT}/auth/login`;
  },
  signUp: () => {
    return `${ENVIRONMENT.API_ENDPOINT}/users`;
  },
  getAll: () => {
    return `${ENVIRONMENT.API_ENDPOINT}/users`;
  },
  resetPasswordemail: () => {
    return `${ENVIRONMENT.API_ENDPOINT}/emailRegister/reset`;
  },
  resetPassword: () => {
    return `${ENVIRONMENT.API_ENDPOINT}/users/reset`;
  },
  updateUserDetail: () => {
    return `${ENVIRONMENT.API_ENDPOINT}/users`;
  },
  updateUserCreditial: () => {
    return `${ENVIRONMENT.API_ENDPOINT}/users/changepassword`;
  },
  addDelivery: () => {
    return `${ENVIRONMENT.API_ENDPOINT}/delivery/address`;
  },
  userDeliveryAddress: (id) => {
    return `${ENVIRONMENT.API_ENDPOINT}/delivery/userAddress/${id}`;
  },
  addEmail: () => {
    return `${ENVIRONMENT.API_ENDPOINT}/emailRegister/email`;
  },
  otpData: () => {
    return `${ENVIRONMENT.API_ENDPOINT}/emailRegister/matchotp`;
  },
  getEmail: () => {
    return `${ENVIRONMENT.API_ENDPOINT}/emailRegister/email`;
  },
  registerUser: () => {
    return `${ENVIRONMENT.API_ENDPOINT}/users`;
  },
  getUser: () => {
    return `${ENVIRONMENT.API_ENDPOINT}/users`;
  },
  getBrands: () => {
    return `${ENVIRONMENT.API_ENDPOINT}/brands/brands`;
  },
 search: () => {
    return `${ENVIRONMENT.API_ENDPOINT}/search`;
  },
 getOrders : () => {
    return `${ENVIRONMENT.API_ENDPOINT}/orders`;
  },
  getaddress: userId => {
    return `${ENVIRONMENT.API_ENDPOINT}/deivery/userAddress/${userId}` ;
  },
 getProductById : () => {
    return `${ENVIRONMENT.API_ENDPOINT}/products/id`;
  },
  updateUseraddress: () => {
    return `${ENVIRONMENT.API_ENDPOINT}/delivery/address`;
  },
  getCategories: () => {
    return `${ENVIRONMENT.API_ENDPOINT}/category`;
  },
  getallCategory: id => {
    return `${ENVIRONMENT.API_ENDPOINT}/category/${id}`;
  },
  userContactFormDetails: () => {
    return `${ENVIRONMENT.API_ENDPOINT}/contact`;
  },
  getAllLabel :(lang)=>{
    return `${ENVIRONMENT.API_ENDPOINT}/internationalization/getlabels/${lang}`;
  }
};
