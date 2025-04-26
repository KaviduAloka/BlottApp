import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, FlatList, Linking} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {commonStyles} from '../../../../themes';
import {profileSelector} from '../../../../store/appReducer/selectors';
import styles from './styles';
import {getNews} from '../../store/actions';
import SizedBox from '../../../../components/SizedBox';
import {NewsListItemType} from '../../../../types';
import NewsListItem from '../../views/NewsListItem';

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

  const ListEmptyComponent = (
    <>
      <SizedBox height={50} />
      <Text style={styles.listEmptyText}>Please wait . . .</Text>
    </>
  );

  const renderItem = ({item}: {item: NewsListItemType}) => (
    <NewsListItem data={item} onPress={() => Linking.openURL(item.url)} />
  );

  const keyExtractor = (item: NewsListItemType, index: number) => `${index}`;

  return (
    <SafeAreaView style={[commonStyles.fullFlex, styles.container]}>
      <Text style={styles.greetingText}>Hey {profile?.first_name}</Text>
      <FlatList
        data={newsList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={commonStyles.screenScrollViewContentContainer}
      />
    </SafeAreaView>
  );
};

export default Home;
