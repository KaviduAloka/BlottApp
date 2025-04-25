import {PayloadAction} from '@reduxjs/toolkit';
import ErrorHandler from '../../../services/ErrorsHandler';
import {call} from 'redux-saga/effects';
import {setStorageItem} from '../../../helpers/storageHelpers';
import {StorageConstants} from '../../../constants';
import {initLocalStorageDataSaga} from '../../../store/appSagas/sagas';

export function* loginSaga(
  action: PayloadAction & {
    payload: {credentials: {first_name: string; last_name: string}};
  },
) {
  try {
    yield call(
      setStorageItem,
      StorageConstants.PROFILE_DATA,
      JSON.stringify(action.payload.credentials),
    );

    yield call(initLocalStorageDataSaga);
  } catch (error) {
    yield call(ErrorHandler, error);
  }
}
