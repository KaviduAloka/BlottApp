import React, {useState} from 'react';
import {Text, ScrollView, Image, View} from 'react-native';
import {useDispatch} from 'react-redux';
import Button from '../../../../components/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonStyles, Images} from '../../../../themes';
import styles from './styles';
import SizedBox from '../../../../components/SizedBox';
import TextInput from '../../../../components/typography/TextInput';
import {login} from '../../store/actions';

const Auth: React.FC = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onLoginPress = () => {
    dispatch(
      login({
        credentials: {
          first_name: firstName,
          last_name: lastName,
        },
      }),
    );
  };

  return (
    <SafeAreaView style={commonStyles.fullFlex}>
      <ScrollView
        contentContainerStyle={commonStyles.screenScrollViewContentContainer}>
        <View style={commonStyles.fullFlex}>
          <Text style={styles.title}>Your legal name</Text>
          <Text style={styles.screenDescription}>
            We need to know a bit about you so that we can create your account.
          </Text>
          <SizedBox height={20} />
          <TextInput
            placeholder="First name"
            value={firstName}
            onChangeText={setFirstName}
            textContentType="name"
          />
          <SizedBox height={20} />
          <TextInput
            placeholder="Last name"
            value={lastName}
            onChangeText={setLastName}
            textContentType="familyName"
          />
        </View>
        <Button
          disabled={firstName === '' || lastName === ''}
          onPress={onLoginPress}
          style={styles.nextButton}>
          <Image source={Images.icons.right_arrow} />
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Auth;
