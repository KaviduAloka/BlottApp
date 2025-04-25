import React from 'react';
import {useDispatch} from 'react-redux';
import {Alert, Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {commonStyles, Images} from '../../../../themes';
import Button from '../../../../components/Button';
import styles from './styles';
import SizedBox from '../../../../components/SizedBox';
import {allowNotification} from '../../../../store/appReducer/actions';

const NotificationAllowContainer: React.FC = () => {
  const dispatch = useDispatch();

  const onContinuePress = () => {
    Alert.alert(
      '"Blott" Would Like to Send You Notifications',
      'Notification may include alerts, sounds, and icon badges. These can be configured in Settings',
      [
        {text: "Don't allow"},
        {text: 'Allow', onPress: onAllowNotificationsPress},
      ],
    );
  };

  const onAllowNotificationsPress = () => {
    dispatch(allowNotification({notificationsAllowed: true}));
  };

  return (
    <SafeAreaView style={commonStyles.fullFlex}>
      <ScrollView
        contentContainerStyle={commonStyles.screenScrollViewContentContainer}>
        <View style={[commonStyles.fullFlex, styles.container]}>
          <Image source={Images.icons.notification} />
          <SizedBox height={20} />
          <Text style={styles.title}>Get the most out of Blott ✅</Text>
          <SizedBox height={20} />
          <Text style={styles.description}>
            Allow notifications to stay in the loop with your payments, requests
            and groups.
          </Text>
        </View>
        <Button onPress={onContinuePress}>Continue</Button>
        <SizedBox height={20} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationAllowContainer;
