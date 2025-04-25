import React from 'react';
import {useSelector} from 'react-redux';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from '../features/auth';
import SplashScreen from '../features/splashScreen';
import {navigationRef} from '../services/NavigationService';
import {
  appInitializedSelector,
  profileSelector,
} from '../store/appReducer/selectors';
import Home from '../features/home';
import {NavigationConstants} from '../constants';
import CommonScreen from '../features/CommonScreen';

const StackNavigation: React.FC = () => {
  const appInitiated = useSelector(appInitializedSelector);
  const profile = useSelector(profileSelector);

  // PLEASE REFER: https://reactnavigation.org/docs/nesting-navigators?config=static

  const RootStack = createNativeStackNavigator({
    groups: {
      NOT_INITIATED: {
        if: () => !appInitiated,
        screens: {
          [NavigationConstants.SPLASHSCREEN]: {
            screen: SplashScreen,
          },
        },
      },
      NOT_LOGGED_IN: {
        if: () => profile === null,
        screens: {
          [NavigationConstants.AUTH]: {
            screen: Auth,
            options: {headerTitle: 'Login Screen'},
          },
        },
      },
      LOGGED_IN: {
        if: () => profile !== null,
        screens: {
          Home,
        },
      },
    },
    screens: {
      //  common screens
      COMMON_SCREEN: {
        screen: CommonScreen,
      },
    },
  });

  const Navigation = createStaticNavigation(RootStack);

  return <Navigation ref={navigationRef} />;
};

export default React.memo(StackNavigation, () => false);
