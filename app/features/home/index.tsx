import React from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import Button from '../../components/Button';
import {logout} from '../../store/appReducer/actions';
import {navigate} from '../../services/NavigationService';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const onLogoutPress = () => {
    dispatch(logout());
  };

  return (
    <View>
      <Text>HOME</Text>
      <Button onPress={() => navigate('COMMON_SCREEN')}>
        Navigate To Common
      </Button>
      <Button onPress={onLogoutPress}>LOGOUT</Button>
    </View>
  );
};

export default Home;
