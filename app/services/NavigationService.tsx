import {
  CommonActions,
  createNavigationContainerRef,
  NavigationContainerRef,
  ParamListBase,
} from '@react-navigation/native';

const navigationRef: React.LegacyRef<NavigationContainerRef<ParamListBase>> =
  createNavigationContainerRef();

const navigate = (routeName: string, params?: object): void => {
  if (navigationRef.current?.isReady()) {
    navigationRef.current.dispatch(CommonActions.navigate(routeName, params));
  }
};

const goBack = (): void => {
  navigationRef.current?.goBack();
};

export {navigate, goBack, navigationRef};
