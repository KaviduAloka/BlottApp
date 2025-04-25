import {takeEvery} from 'redux-saga/effects';
import * as types from '../appReducer/types';
import {initApplicationSaga, logoutSaga, requestCountriesSaga} from './sagas';

export default [
  takeEvery(types.INIT_APPLICATION, initApplicationSaga),
  takeEvery(types.REQUEST_COUNTRIES, requestCountriesSaga),
  takeEvery(types.LOGOUT, logoutSaga),
];
