import {StyleSheet} from 'react-native';
import {Colors} from '../../themes';

export default StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.PURPLE,
    minWidth: 80,
    alignItems: 'center',
  },
  text: {
    color: Colors.WHITE,
  },
});
