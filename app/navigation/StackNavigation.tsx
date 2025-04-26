import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
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
import ErrorPageContainer from '../features/home/containers/ErrorPageContainer';

const StackNavigation: React.FC = () => {
  const appInitiated = useSelector(appInitializedSelector);
  const profile = useSelector(profileSelector);
  const notificationAllowed = useSelector(notificationAllowedSelector);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarBackgroundColor: Colors.BLACK,
        }}>
        {appInitiated === false ? (
          //  application not initialized
          <Stack.Group>
            <Stack.Screen
              name={NavigationConstants.SPLASHSCREEN}
              component={SplashScreen}
            />
          </Stack.Group>
        ) : profile === null ? (
          //  not logged in
          <Stack.Group>
            <Stack.Screen name={NavigationConstants.LOGIN} component={Auth} />
          </Stack.Group>
        ) : notificationAllowed === null ? (
          //  user logged in
          //  notification allowed status has not set
          <Stack.Group>
            <Stack.Screen
              name={NavigationConstants.NOTIFICATION_ALLOW}
              component={NotificationAllowContainer}
            />
          </Stack.Group>
        ) : (
          //  user logged in
          //  notification allowed status is set
          <Stack.Group>
            <Stack.Screen
              name={NavigationConstants.DASHBOARD}
              component={DashboardContainer}
            />
          </Stack.Group>
        )}
        <Stack.Screen
          name={NavigationConstants.ERROR_PAGE}
          component={ErrorPageContainer}
          options={{headerShown: false, animation: 'fade_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(StackNavigation, () => false);
