import {all} from 'redux-saga/effects';
import appSagas from './appSagas';
import authSagas from '../features/auth/sagas';

export default function* rootSaga() {
  yield all([...appSagas, ...authSagas]);
}
