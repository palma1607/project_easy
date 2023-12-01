import {StyleSheet} from 'react-native';
import colors from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5%',
    marginTop: '20%',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
    paddingBottom: 20,
  },
  searchContainer: {
    alignSelf: 'center',
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
  userContainer: {
    flexDirection: 'row',
    backgroundColor: colors.informationLight,
    width: '95%',
    height: 88,
    borderRadius: 28,
    padding: 20,
    alignItems: 'center',
    shadowColor: colors.blackLight,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 15,
    shadowRadius: 3,
    elevation: 5,
    alignSelf: 'center',
  },
  banner: {
    flexDirection: 'row',
    backgroundColor: colors.secondaryDarkest,
    width: '95%',
    height: 128,
    borderRadius: 28,
    padding: '10%',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: colors.blackLight,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 15,
    shadowRadius: 5,
    elevation: 5,
  },
  userIcon: {
    marginRight: 10,
    width: 64,
    height: 64,
  },
  bannerIcon: {
    marginRight: -40,
    width: 131,
    height: 121,
  },
  textContainer: {
    flex: 1,
  },
  userContainerTittle: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
  },
  bannerTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: 'white',
  },
  bannerSubtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    width: '45%',
    height: 100,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    borderRadius: 28,
    flex: 1,
  },
  carouselText: {
    fontSize: 17,
    fontFamily: 'Poppins-Light',
    color: 'white',
    alignSelf: 'center',
    padding: 10,
  },
  
});
export default styles;
