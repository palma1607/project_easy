import {StyleSheet} from 'react-native';
import colors from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5%',
    marginTop: '0%',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    alignSelf: 'flex-start',
    maxWidth: '65%',
    top: '-30%',
  },
  filterIcon: {
    right: -40,
    top: 350,
    width: 643,
    height: 713,
    zIndex: -1,
    position: 'absolute',
  },
  inputContainer: {
    borderRadius: 10,
    padding: 10,
    width: '90%',
    position: 'absolute',
    top: '50%',
    transform: [{translateY: -50}],
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 50,
    paddingHorizontal: 10,
  },
  linkContainer: {
    marginTop: 10,
    top: 300,
  },
  linkText: {
    color: colors.blackMedium,
  },
});

export default styles;
