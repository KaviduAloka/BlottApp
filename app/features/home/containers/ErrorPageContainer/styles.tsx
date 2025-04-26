import {StyleSheet} from 'react-native';
import {Colors} from '../../../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  greetingText: {
    color: Colors.WHITE,
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 25,
  },
  description: {
    color: Colors.WHITE,
    fontSize: 16,
    marginHorizontal: 25,
  },
});
