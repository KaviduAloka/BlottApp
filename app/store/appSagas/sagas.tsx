import {call, put} from 'redux-saga/effects';
import {
  setAppInitialized,
  setCountries,
  setProfile,
} from '../appReducer/reducer';
import {testApi} from '../../services/test/test';
import ErrorHandler from '../../services/ErrorsHandler';
import {StorageConstants} from '../../constants';
import {getStorageItem} from '../../helpers/storageHelpers';

export function* initApplicationSaga() {
  try {
    yield call(initLocalStorageDataSaga);

    yield put(setAppInitialized(true));
  } catch (error) {
    yield call(ErrorHandler, initApplicationSaga, error);
  }
}

export function* initLocalStorageDataSaga() {
  try {
    const userData: null | {name: string} = yield call(
      getStorageItem,
      StorageConstants.PROFILE_DATA,
    );

    if (userData) {
      yield put(setProfile(userData));
    }
  } catch (error) {
    yield call(ErrorHandler, initLocalStorageDataSaga, error);
  }
}

export function* requestCountriesSaga() {
  try {
    const response: Array<Object> = yield call(testApi);

    yield put(setCountries(response));
  } catch (error) {}
}

export function* logoutSaga() {
  yield put(setProfile(null));
}
