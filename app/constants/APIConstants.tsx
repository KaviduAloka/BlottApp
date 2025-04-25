import {ENV} from '.';

const {BASE_URL} = ENV.PROD;

export const ApiEndpoints = {
  getNews: `${BASE_URL}/news`,
};
