import {takeEvery} from 'redux-saga/effects';
import * as types from '../appReducer/types';
import {allowNotificationsSaga, initApplicationSaga, logoutSaga} from './sagas';

export default [
  takeEvery(types.INIT_APPLICATION, initApplicationSaga),
  takeEvery(types.LOGOUT, logoutSaga),
  takeEvery(types.ALLOW_NOTIFICATIONS, allowNotificationsSaga),
];
