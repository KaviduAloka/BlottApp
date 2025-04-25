import {ApiEndpoints, Methods} from '../../constants';
import Api from '../Api';

export const getNewsApi = (params: {category: string; token: string}) => {
  return Api(ApiEndpoints.getNews, Methods.GET, undefined, params);
};
