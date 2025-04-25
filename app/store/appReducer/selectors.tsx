import {AppReducerState} from '../reducers';

export const appInitializedSelector = (state: AppReducerState) =>
    state.appReducer.appInitialized,
  profileSelector = (state: AppReducerState) => state.appReducer.profile,
  platformSelector = (state: AppReducerState) => state.appReducer.platform,
  notificationAllowedSelector = (state: AppReducerState) =>
    state.appReducer.notificationAllowed;
