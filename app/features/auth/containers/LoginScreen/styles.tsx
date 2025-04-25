import {StyleSheet} from 'react-native';
import {Colors} from '../../../../themes';

export default StyleSheet.create({
  title: {
    fontWeight: '700',
    fontSize: 30,
    marginVertical: 10,
  },
  screenDescription: {
    color: Colors.PURPLE_TEXT,
    fontSize: 16,
    marginVertical: 10,
  },
  nextButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    alignSelf: 'flex-end',
  },
});
