import React from 'react';
import moment from 'moment';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {NewsListItemType} from '../../../../types';
import styles from './styles';

type Props = {
  data: NewsListItemType;
  onPress: () => void;
};

const NewsListItem: React.FC<Props> = ({data, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.wrapper}
      activeOpacity={0.6}>
      <Image
        source={{uri: data.image}}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.contentWrapper}>
        <View style={styles.topTextRow}>
          <Text style={styles.topText}>{data.source.toUpperCase()}</Text>
          <Text style={styles.topText}>
            {moment(data.datetime * 1000)
              .format('DD MMMM YYYY')
              .toUpperCase()}
          </Text>
        </View>
        <Text style={styles.summaryText} numberOfLines={3}>
          {data.summary}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewsListItem;
