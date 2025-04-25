import {call, put} from 'redux-saga/effects';
import {setAppInitialized, setProfile} from '../appReducer/reducer';
import ErrorHandler from '../../services/ErrorsHandler';
import {StorageConstants} from '../../constants';
import {getStorageItem} from '../../helpers/storageHelpers';

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
    console.log('>>');
    const userData: null | {name: string} = yield call(
      getStorageItem,
      StorageConstants.PROFILE_DATA,
    );

    if (userData) {
      yield put(setProfile(userData));
    }
  } catch (error) {
    yield call(ErrorHandler, error);
  }
}

export function* logoutSaga() {
  yield put(setProfile(null));
}
