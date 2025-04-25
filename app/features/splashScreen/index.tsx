import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {initApplication} from '../../store/appReducer/actions';
import {appInitializedSelector} from '../../store/appReducer/selectors';
import {NavigationConstants} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const SplashScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const appInitiated = useSelector(appInitializedSelector);

  useEffect(() => {
    setTimeout(() => {
      dispatch(initApplication());
    }, 1500);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (appInitiated) {
      // navigation.navigate(NavigationConstants.AUTH);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appInitiated]);

  return (
    <View style={{flex: 1}}>
      {/* <Text weight="bold">SPLASH SCREEN</Text> */}
    </View>
  );
};

export default SplashScreen;
