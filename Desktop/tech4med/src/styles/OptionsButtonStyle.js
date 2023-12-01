import {StyleSheet} from 'react-native';
import colors from '../utils/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blackDark,
    padding: 10,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 80,
    margin: 10,
  },
  userText: {
    fontFamily: 'Poppins-Semibold',
    color: 'white',
    fontSize: 16,
  },
  storeText: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: colors.whiteLightMedium,
  },
  disabledText: {
    color: colors.blackLight,
  },
});

export {styles};
