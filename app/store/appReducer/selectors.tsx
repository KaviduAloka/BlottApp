import {AppReducerState} from '../reducers';

export const appInitializedSelector = (state: AppReducerState) =>
    state.appReducer.appInitialized,
  customAlertSelector = (state: AppReducerState) =>
    state.appReducer.customAlert,
  loadingSelector = (state: AppReducerState) => state.appReducer.loading,
  profileSelector = (state: AppReducerState) => state.appReducer.profile,
  platformSelector = (state: AppReducerState) => state.appReducer.platform;
