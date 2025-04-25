import {takeEvery} from 'redux-saga/effects';
import * as types from '../store/types';
import {loginSaga} from './authSagas';

export default [takeEvery(types.LOGIN, loginSaga)];
