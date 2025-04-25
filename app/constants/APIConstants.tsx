import {ENV} from '.';

const {BASE_URL} = ENV.PREPROD;

export const ApiEndpoints = {
  TEST: `${BASE_URL}`,
};
