import {call, put} from 'redux-saga/effects';
import {
  setAppInitialized,
  setNotificationAllowed,
  setProfile,
} from '../appReducer/reducer';
import ErrorHandler from '../../services/ErrorsHandler';
import {StorageConstants} from '../../constants';
import {getStorageItem, setStorageItem} from '../../helpers/storageHelpers';
import {PayloadAction} from '@reduxjs/toolkit';

export function* initApplicationSaga() {
  try {
    yield call(initLocalStorageDataSaga);

    yield put(setAppInitialized(true));
  } catch (error) {
    yield call(ErrorHandler, error);
  }
}

export function* initLocalStorageDataSaga() {
  try {
    const userData: null | {first_name: string; last_name: string} = yield call(
      getStorageItem,
      StorageConstants.PROFILE_DATA,
    );
    if (userData) {
      yield put(setProfile(userData));
    }

    const notificationAllowedData: string | null = yield call(
      getStorageItem,
      StorageConstants.NOTIFICATION_ALLOWED,
    );
    if (notificationAllowedData) {
      yield put(setNotificationAllowed(JSON.parse(notificationAllowedData)));
    }
  } catch (error) {
    yield call(ErrorHandler, error);
  }
}

export function* allowNotificationsSaga(
  action: PayloadAction & {payload: {notificationsAllowed: boolean}},
) {
  try {
    yield call(
      setStorageItem,
      StorageConstants.NOTIFICATION_ALLOWED,
      `${action.payload.notificationsAllowed}`,
    );
    yield call(initLocalStorageDataSaga);
  } catch (error) {
    yield call(ErrorHandler, error);
  }
}

export function* logoutSaga() {
  yield put(setProfile(null));
}
