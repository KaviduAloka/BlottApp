import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button';

const CommonScreen: React.FC = ({route}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>COMMON SCREEN {JSON.stringify(route)}</Text>
      <Button
        onPress={() => navigation.navigate('COMMON_SCREEN', {test: 'TEST'})}>
        RE-NAVIGATE
      </Button>
    </View>
  );
};

export default CommonScreen;
