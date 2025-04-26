import {StyleSheet} from 'react-native';
import {Colors} from '../../../../themes';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  contentWrapper: {
    flex: 1,
  },
  topTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  topText: {
    color: Colors.WHITE,
    fontWeight: '400',
    fontSize: 12,
  },
  summaryText: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.WHITE,
  },
});
