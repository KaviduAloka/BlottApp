import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button';
import {setProfile} from '../../store/appReducer/reducer';
import {profileSelector} from '../../store/appReducer/selectors';
import {navigate} from '../../services/NavigationService';
import {NavigationConstants} from '../../constants';

const Auth: React.FC = () => {
  const dispatch = useDispatch();

  const profile = useSelector(profileSelector);

  useEffect(() => {
    if (profile) {
      navigate(NavigationConstants.HOME);
    }
  }, [profile]);

  const onLoginPress = () => {
    dispatch(setProfile({name: 'ALOKA'}));
  };

  return (
    <View style={{marginTop: 100, alignItems: 'center'}}>
      <Text>AUTH SCREEN</Text>
      <Button onPress={onLoginPress}>LOGIN</Button>
    </View>
  );
};

export default Auth;
