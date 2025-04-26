import {takeEvery} from 'redux-saga/effects';
import * as types from '../store/types';
import {getNewsSaga} from './homeSagas';

export default [takeEvery(types.GET_NEWS, getNewsSaga)];
