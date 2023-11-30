import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OptionsScreenStyles from '../styles/OptionsScreenStyles';
import OptionsButton from '../components/OptionsButton';
import {styles} from '../styles/OptionsButtonStyle';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const OptionsScreen = () => {
  const navigation = useNavigation();

  const user = async () => {
      navigation.navigate('RegisterScreen');
  };

  const store = async () => {
    navigation.navigate('StoreContactScreen');
};

  return (
    <View style={OptionsScreenStyles.container}>
      <OptionsButton
        title="Sou consumidor"
        onPress={user}
      />
      <OptionsButton
        title="Sou prestador de serviços"
        onPress={store}
        textStyle={styles.storeText} // Exemplo de estilo
      />
    </View>
  );
};

export default OptionsScreen;
