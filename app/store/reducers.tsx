import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';
import appReducer, {AppStateType} from './appReducer/reducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export interface AppReducerState {
  appReducer: AppStateType;
}

export const store = configureStore({
  reducer: {
    appReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
