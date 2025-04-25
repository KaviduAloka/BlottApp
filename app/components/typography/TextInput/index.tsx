import React from 'react';
import {TextInput as RNTextInput, TextInputProps} from 'react-native';
import styles from './styles';
import {Colors} from '../../../themes';

type Props = TextInputProps;

const TextInput: React.FC<Props> = props => {
  return (
    <RNTextInput
      {...props}
      style={styles.input}
      placeholderTextColor={Colors.LIGHT_TEXT}
    />
  );
};

export default TextInput;
