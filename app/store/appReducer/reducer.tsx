import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Platform} from 'react-native';

export type AppStateType = {
  platform: string;
  profile: null | {first_name: string; last_name: string};
  appInitialized: boolean;
  notificationAllowed: null | boolean;
};

const initialState: AppStateType = {
  platform: Platform.OS,
  profile: null,
  appInitialized: false,
  notificationAllowed: null,
};

const appSlice = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    setAppInitialized: (state, action: PayloadAction<boolean>) => {
      state.appInitialized = action.payload;
    },
    setProfile: (
      state,
      action: PayloadAction<{first_name: string; last_name: string} | null>,
    ) => {
      state.profile = action.payload;
    },
    setNotificationAllowed: (state, action: PayloadAction<boolean>) => {
      state.notificationAllowed = action.payload;
    },
  },
});

export const {setProfile, setAppInitialized, setNotificationAllowed} =
  appSlice.actions;

export default appSlice.reducer;
