import React from 'react';
import {View, Text, TextInput, Image, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainScreenStyles from '../styles/MainScreenStyles';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../utils/colors';

const cardData = [
  {color: colors.primaryMedium, title: 'Consultas'},
  {
    color: colors.primaryMedium,
    title: 'Fisioterapia',
  },
  {
    color: colors.primaryMedium,
    title: 'Nutrição',
  },
  {
    color: colors.primaryMedium,
    title: 'Aluguel de Equipamentos',
  },
  {
    color: colors.primaryMedium,
    title: 'Enfermagem',
  },
  {
    color: colors.primaryMedium,
    title: 'Cuidadores',
  },
  {
    color: colors.primaryMedium,
    title: 'Medicamentos',
  },
  {
    color: colors.primaryMedium,
    title: 'Cirúrgicas',
  },
  {
    color: colors.primaryMedium,
    title: 'Suplementação',
  },
];

const MainScreen = () => {
  const navigation = useNavigation();

  const onCardPress = (item) => {
    navigation.navigate('StoresScreen', { /* aqui você pode passar parâmetros se necessário */ });
  };

  const renderCard = ({item}) => {
    return (
     
    <LinearGradient
        colors={[colors.blackDarkest, colors.blackDark, colors.blackMedium]} // Replace with your desired gradient colors
        style={MainScreenStyles.carouselContainer}>
          <TouchableOpacity onPress={() => onCardPress(item)}>
        <Text style={MainScreenStyles.carouselText}>{item.title}</Text>
        </TouchableOpacity>
      </LinearGradient>
      
    );
  };

  return (
    <View style={MainScreenStyles.container}>
    <ScrollView>
      <View style={MainScreenStyles.userContainer}>
        <Image
          source={require('../assets/images/user.png')}
          style={MainScreenStyles.userIcon}
        />
        <View style={MainScreenStyles.textContainer}>
          <Text style={MainScreenStyles.userContainerTittle}>
            Seja bem vindo! O que está procurando?
          </Text>
        </View>
      </View>
      <View style={MainScreenStyles.searchContainer}>
        <TextInput
          style={MainScreenStyles.searchInput}
          placeholder="Pesquisar"
        />
        <Image
          source={require('../assets/images/filter-icon.png')}
          style={MainScreenStyles.filterIcon}
        />
      </View>
      <Text style={MainScreenStyles.title}>Escolha a categoria</Text>
      <View style={MainScreenStyles.banner}>
        <View style={MainScreenStyles.textContainer}>
          <Text style={MainScreenStyles.bannerTitle}>Bem vindo!</Text>
          <Text style={MainScreenStyles.bannerSubtitle}>
            10% off com o cupom BEMVINDO10
          </Text>
        </View>
        <Image
          source={require('../assets/images/3d-hand.png')}
          style={MainScreenStyles.bannerIcon}
        />
      </View>
      <FlatList
        data={cardData}
        renderItem={renderCard}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        scrollEnabled={false}
      />
      </ScrollView>
    </View>
  );
};

export default MainScreen;
