import {NewsListItemType} from '../../../types';
import * as types from './types';

export const getNews = (payload: {
  callback: (list: NewsListItemType[]) => void;
}) => ({
  type: types.GET_NEWS,
  payload,
});
