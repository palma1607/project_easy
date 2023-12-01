import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import StoresScreenStyles from '../styles/StoresScreenStyles'

const StoresScreen = () => {
    const navigation = useNavigation();

    const onCardPress = (item) => {
        navigation.navigate('ProductsScreen');
      };

    return (
        <View style={StoresScreenStyles.container}>
            <Text style={StoresScreenStyles.title}>
                Estabelecimentos disponíveis pra sua região:
            </Text>
            <TouchableOpacity style={StoresScreenStyles.locationContainer} onPress={onCardPress}>
                <Image
                    source={require('../assets/images/logo-stores.png')}
                    style={StoresScreenStyles.earthIcon}
                />
                <View style={StoresScreenStyles.textContainer}>
                    <Text style={StoresScreenStyles.locationCity}>Loja</Text>
                    <Text style={StoresScreenStyles.locationState}>Frete R$10,00</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default StoresScreen;