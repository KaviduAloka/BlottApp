import {PayloadAction} from '@reduxjs/toolkit';
import {call} from 'redux-saga/effects';
import {API_KEY} from '@env';
import ErrorHandler from '../../../services/ErrorsHandler';
import {getNewsApi} from '../../../services/APIs/home';
import {NewsListItemType} from '../../../types';

export function* getNewsSaga(
  action: PayloadAction & {payload: {callback: (list: any[]) => void}},
) {
  try {
    if (API_KEY) {
      const response: NewsListItemType[] = yield call(getNewsApi, {
        category: 'general',
        token: API_KEY,
      });

      action.payload.callback(response);
    } else {
      throw 'API key is missing';
    }
  } catch (error) {
    yield call(ErrorHandler, '' + error?.toString());
  }
}
