import * as types from './types';

type ActionReturnType = {
  type: string;
  payload?: object;
};

export const initApplication = (): ActionReturnType => ({
  type: types.INIT_APPLICATION,
});

export const logout = (): ActionReturnType => ({
  type: types.LOGOUT,
});

export const requestCountries = (): ActionReturnType => ({
  type: types.REQUEST_COUNTRIES,
});
