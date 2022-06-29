// import { config } from "config";

// export const environment = {
//   production: true,
//   apiURL: config.apiUrl
// };
export const environment = {
  production: true,
  apiUrl: {
    reports: 'http://93.188.167.68:4500/api',
    master: 'http://93.188.167.68:4500/api',
  },
  socketUrl: 'http://93.188.167.68:4500',
  name: 'prod'
};