import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../../../components/Button';
import {logout} from '../../../../store/appReducer/actions';
import {commonStyles} from '../../../../themes';
import {profileSelector} from '../../../../store/appReducer/selectors';
import styles from './styles';
import {getNews} from '../../store/actions';
import SizedBox from '../../../../components/SizedBox';
import {NewsListItemType} from '../../../../types';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const profile = useSelector(profileSelector);

  const [newsList, setNewsList] = useState<NewsListItemType[]>([]);

  useEffect(() => {
    dispatch(
      getNews({
        callback: list => setNewsList(list),
      }),
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLogoutPress = () => {
    dispatch(logout());
  };

  const ListEmptyComponent = (
    <>
      <SizedBox height={50} />
      <Text style={styles.listEmptyText}>Please wait . . .</Text>
    </>
  );

  const renderItem = () => null;

  return (
    <SafeAreaView style={[commonStyles.fullFlex, styles.container]}>
      <Text style={styles.greetingText}>Hey {profile?.first_name}</Text>
      <FlatList
        data={newsList}
        ListEmptyComponent={ListEmptyComponent}
        renderItem={renderItem}
        contentContainerStyle={commonStyles.screenScrollViewContentContainer}
      />
      <Text>HOME</Text>
      <Button onPress={onLogoutPress}>LOGOUT</Button>
    </SafeAreaView>
  );
};

export default Home;
