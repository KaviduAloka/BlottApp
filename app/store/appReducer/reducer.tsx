import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Platform} from 'react-native';

export type AppStateType = {
  platform: string;
  profile: null | object;
  appInitialized: boolean;
};

const initialState: AppStateType = {
  platform: Platform.OS,
  profile: null,
  appInitialized: false,
};

const appSlice = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    setAppInitialized: (state, action: PayloadAction<boolean>) => {
      state.appInitialized = action.payload;
    },
    setProfile: (state, action: PayloadAction<Object | null>) => {
      state.profile = action.payload;
    },
  },
});

export const {setProfile, setAppInitialized} = appSlice.actions;

export default appSlice.reducer;
