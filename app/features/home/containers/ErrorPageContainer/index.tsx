import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import {profileSelector} from '../../../../store/appReducer/selectors';
import SizedBox from '../../../../components/SizedBox';

const ErrorPageContainer: React.FC = () => {
  const profile = useSelector(profileSelector);

  return (
    <SafeAreaView style={styles.container}>
      <SizedBox height={20} />
      <Text style={styles.greetingText}>Hey {profile?.first_name || ''}</Text>
      <SizedBox height={20} />
      <Text style={styles.description}>
        Something went wrong. Please try again later.
      </Text>
    </SafeAreaView>
  );
};

export default ErrorPageContainer;
