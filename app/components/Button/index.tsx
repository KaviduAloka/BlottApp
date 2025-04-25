import React from 'react';
import {StyleProp, TextStyle, TouchableOpacity, ViewStyle, Text} from 'react-native';
import styles from './styles';
import {Colors} from '../../themes';

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
  filled = true,
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
          backgroundColor: filled ? Colors.PURPLE : Colors.TRANSPARENT,
        },
        style,
      ]}>
      <Text
        style={[
          styles.text,
          {color: filled ? Colors.WHITE : Colors.PURPLE},
          textStyle,
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
