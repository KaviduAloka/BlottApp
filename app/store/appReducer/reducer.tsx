import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Platform} from 'react-native';

export type CustomAlertType = {
  visible?: boolean;
  title?: string;
  message?: string;
  primaryButtonText?: string;
  onPrimaryButtonPress?: Function;
  secondaryButtonText?: string;
  onSecondaryButtonPress?: Function;
};

export type LoadingType = {
  visible?: boolean;
  text?: string;
};

export type AppStateType = {
  platform: string;
  profile: null | object;
  appInitialized: boolean;
  customAlert: CustomAlertType;
  loading: LoadingType;
  countries: Array<Object>;
};

const initialCustomAlertState = {
  visible: false,
  title: '',
  message: '',
  primaryButtonText: '',
  onPrimaryButtonPress: () => {},
  secondaryButtonText: '',
  onSecondaryButtonPress: () => {},
};

const initialLoadingState = {
  visible: false,
  text: '',
};

const initialState: AppStateType = {
  platform: Platform.OS,
  profile: null,
  appInitialized: false,
  customAlert: {...initialCustomAlertState},
  loading: {
    ...initialLoadingState,
  },
  countries: [],
};

const appSlice = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<Array<Object>>) => {
      state.countries = action.payload;
    },
    setProfile: (state, action: PayloadAction<Object | null>) => {
      state.profile = action.payload;
    },
    setAppInitialized: (state, action: PayloadAction<boolean>) => {
      state.appInitialized = action.payload;
    },
    showCustomAlert: (state, action: PayloadAction<CustomAlertType>) => {
      state.customAlert = {
        ...action.payload,
        visible: true,
      };
    },
    hideCustomAlert: state => {
      state.customAlert = {
        ...initialCustomAlertState,
      };
    },
    showLoading: (state, action: PayloadAction<LoadingType>) => {
      state.loading = {
        text: action?.payload?.text || 'Please wait',
        visible: true,
      };
    },
    hideLoading: state => {
      state.loading = {
        ...initialLoadingState,
      };
    },
  },
});

export const {
  setCountries,
  setProfile,
  setAppInitialized,
  showCustomAlert,
  hideCustomAlert,
  showLoading,
  hideLoading,
} = appSlice.actions;

export default appSlice.reducer;
