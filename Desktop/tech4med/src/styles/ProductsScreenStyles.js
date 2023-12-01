import { StyleSheet } from 'react-native';
import colors from '../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    medicationContainer: {
        flex: 1,
        backgroundColor: colors.primaryDarkest,
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
    },
    header: {
        fontSize: 24,
        fontFamily: 'Poppins-Regular',
        bottom: 150,
        marginBottom: 20,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 10,
    },
    pillImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20,
    },

    quantityButton: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },
    quantityText: {
        fontSize: 24,
        alignSelf: 'center',
    },
    buyButtonText: {
        fontSize: 16,
        alignSelf: 'center',
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 50,
        width: '100%',
    },
    buyButton: {
        backgroundColor: colors.secondaryDarkest,
        padding: 10,
        borderRadius: 20,
        height: '100%',
        width: '50%',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    banner: {
        flexDirection: 'row',
        backgroundColor: colors.secondaryDarkest,
        top: -180,
        width: '100%',
        height: '55%',
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
        padding: '10%',
        alignItems: 'center',
        alignSelf: 'center',
    },
    bannerIcon: {
        width: 200,
        height: 190,
        top: 100,
        flex: 1,
    },
    textContainer: {
        flex: 1,
    },
    bannerTitle: {
        fontSize: 28,
        fontFamily: 'Poppins-Regular',
        color: 'white',
        bottom: 100,
    },
});
export default styles;
