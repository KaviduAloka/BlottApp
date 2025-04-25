import React from 'react';
import {useSelector} from 'react-redux';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from '../features/auth/containers/LoginScreen';
import SplashScreen from '../features/splashScreen';
import {navigationRef} from '../services/NavigationService';
import {
  appInitializedSelector,
  notificationAllowedSelector,
  profileSelector,
} from '../store/appReducer/selectors';
import DashboardContainer from '../features/home/containers/DashboardContainer';
import NotificationAllowContainer from '../features/home/containers/NotificationAllowContainer';
import {NavigationConstants} from '../constants';
import {Colors} from '../themes';

const StackNavigation: React.FC = () => {
  const appInitiated = useSelector(appInitializedSelector);
  const profile = useSelector(profileSelector);
  const notificationAllowed = useSelector(notificationAllowedSelector);

  const RootStack = createNativeStackNavigator({
    groups: {
      NOT_INITIATED: {
        if: () => appInitiated === false,
        screens: {
          [NavigationConstants.SPLASHSCREEN]: {
            screen: SplashScreen,
            options: {headerShown: false},
          },
        },
      },
      NOT_LOGGED_IN: {
        if: () => profile === null,
        screens: {
          [NavigationConstants.LOGIN]: {
            screen: Auth,
            options: {headerTitle: 'Login Screen', headerShown: false},
          },
        },
      },
      LOGGED_IN: {
        if: () => profile !== null,
        screens: {
          [NavigationConstants.NOTIFICATION_ALLOW]: {
            screen: NotificationAllowContainer,
            options: {headerShown: false},
            if: () => notificationAllowed === null,
          },
          [NavigationConstants.DASHBOARD]: {
            screen: DashboardContainer,
            options: {headerShown: false},
          },
        },
      },
    },
    screenOptions: {
      statusBarBackgroundColor: Colors.BLACK,
    },
  });

  const Navigation = createStaticNavigation(RootStack);

  return <Navigation ref={navigationRef} />;
};

export default React.memo(StackNavigation, () => false);
