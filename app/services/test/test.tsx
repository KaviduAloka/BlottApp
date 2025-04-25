import {ApiEndpoints, Methods} from '../../constants';
import Api from '../Api';

export const testApi = () => {
  return Api(ApiEndpoints.TEST, Methods.GET);
};
