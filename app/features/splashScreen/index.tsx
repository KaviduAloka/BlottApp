import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {initApplication} from '../../store/appReducer/actions';
import {Images} from '../../themes';
import styles from './styles';

const SplashScreen: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(initApplication());
    }, 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Images.images.blott_icon} />
    </View>
  );
};

export default SplashScreen;
