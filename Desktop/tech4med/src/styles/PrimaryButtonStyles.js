import {StyleSheet} from 'react-native';
import colors from '../utils/colors';

const primaryButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.blackDark,
    padding: 10,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    width: 164,
    height: 49,
    top: '35%',
  },
  text: {
    fontFamily: 'Poppins-Semibold',
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

export {primaryButtonStyles};
