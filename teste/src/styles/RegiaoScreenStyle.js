import {StyleSheet} from 'react-native';
import colors from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5%',
    marginTop: '-100%',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  searchIcon: {
    marginRight: 10,
  },
  filterIcon: {
    marginLeft: 10,
    width: 40,
    height: 40,
  },
  searchInput: {
    width: '80%',
    height: 44,
    borderColor: 'transparent',
    backgroundColor: colors.whiteLightMedium,
    borderRadius: 16,
    paddingLeft: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    backgroundColor: colors.whiteLight,
    width: '90%',
    height: 64,
    borderRadius: 28,
    padding: 20,
    alignItems: 'center',
    shadowColor: colors.primaryDark,
    shadowOffset: {width: 8, height: 8},
    shadowOpacity: 30,
    shadowRadius: 20,
    elevation: 30,
  },
  earthIcon: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  textContainer: {
    flex: 1,
  },
  locationCity: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
  locationState: {
    fontSize: 12,
    fontFamily: 'Poppins-Light',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    top: '90%',
    left: '50%',
    transform: [
      { translateX: -(300 / 2) }, 
      { translateY: -(600 / 2) }, 
    ],
    width: 300,
    height: 600,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  
});
export default styles;
