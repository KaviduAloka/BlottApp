import {StyleSheet} from 'react-native';
import {Colors} from '../../../../themes';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.BLACK,
  },
  greetingText: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: 32,
    marginVertical: 10,
    marginHorizontal: 25,
  },
  listEmptyText: {
    color: Colors.LIGHT_TEXT,
    textAlign: 'center',
  },
});
