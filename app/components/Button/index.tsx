import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  Text,
} from 'react-native';
import styles from './styles';

type Props = {
  disabled?: boolean;
  filled?: boolean;
  children: string | JSX.Element;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: Function;
};

const Button: React.FC<Props> = ({
  children,
  disabled,
  style = {},
  textStyle = {},
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress?.()}
      disabled={disabled}
      style={[
        styles.wrapper,
        {
          opacity: !disabled ? 1 : 0.4,
        },
        style,
      ]}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
