import {StyleSheet} from 'react-native';
import colors from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 20,
    marginTop: '-100%',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Poppins-Regular',
    marginBottom: '5%',
  },
  locationContainer: {
    flexDirection: 'row',
    backgroundColor: colors.whiteLight,
    width: '100%',
    height: 84,
    borderRadius: 28,
    padding: 20,
    alignItems: 'center',
    shadowColor: colors.primaryDark,
    shadowOffset: {width: 8, height: 8},
    shadowOpacity: 30,
    shadowRadius: 20,
    elevation: 30,
    margin: 20,
    alignSelf: 'center',
  },
  earthIcon: {
    marginRight: 10,
    width: 50,
    height: 50,
  },
  textContainer: {
    flex: 1,
  },
  locationCity: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
  },
  locationState: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
});
export default styles;
