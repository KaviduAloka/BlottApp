import * as types from './types';

export const login = (payload: {
  credentials: {first_name: string; last_name: string};
}) => ({
  type: types.LOGIN,
  payload,
});
