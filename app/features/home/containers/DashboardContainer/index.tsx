import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../../../components/Button';
import {logout} from '../../../../store/appReducer/actions';
import {navigate} from '../../../../services/NavigationService';
import {commonStyles} from '../../../../themes';
import {profileSelector} from '../../../../store/appReducer/selectors';
import styles from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const profile = useSelector(profileSelector);

  const onLogoutPress = () => {
    dispatch(logout());
  };

  const renderItem = () => null;

  return (
    <SafeAreaView style={[commonStyles.fullFlex, styles.container]}>
      <Text style={styles.greetingText}>Hey {profile?.first_name}</Text>
      <FlatList
        data={[]}
        renderItem={renderItem}
        contentContainerStyle={commonStyles.screenScrollViewContentContainer}
      />
      <Text>HOME</Text>
      <Button onPress={() => navigate('COMMON_SCREEN')}>
        Navigate To Common
      </Button>
      <Button onPress={onLogoutPress}>LOGOUT</Button>
    </SafeAreaView>
  );
};

export default Home;
