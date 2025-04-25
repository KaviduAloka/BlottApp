import {StyleSheet} from 'react-native';
import {Colors} from '../../themes';

export default StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 25,
    backgroundColor: Colors.PURPLE,
    alignItems: 'center',
  },
  text: {
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
});
