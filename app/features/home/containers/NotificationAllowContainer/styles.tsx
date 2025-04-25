import {StyleSheet} from 'react-native';
import {Colors} from '../../../../themes';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    color: Colors.LIGHT_TEXT,
    textAlign: 'center',
    fontSize: 16,
  },
});
