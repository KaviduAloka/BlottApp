import * as types from './types';

export const initApplication = () => ({
  type: types.INIT_APPLICATION,
});

export const logout = () => ({
  type: types.LOGOUT,
});

export const requestCountries = () => ({
  type: types.REQUEST_COUNTRIES,
});

export const allowNotification = (payload: {
  notificationsAllowed: boolean;
}) => ({
  type: types.ALLOW_NOTIFICATIONS,
  payload,
});
