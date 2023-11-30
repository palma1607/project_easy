import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { app } from '../../firebase'; 
import Toast from 'react-native-toast-message';
import StoreContactScreenStyles from '../styles/StoreContactScreenStyles';
import PrimaryButton from '../components/PrimaryButton';

const StoreContactScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const sendEmail = () => {
    const functions = getFunctions(app);
    const sendEmailFunction = httpsCallable(functions, 'sendEmail');

    sendEmailFunction({ email: email })
      .then((result) => {
        console.log('Email enviado com sucesso:', result);
        Toast.show({
          type: 'success',
          text1: 'Email enviado',
          text2: 'Nós recebemos o seu email e em breve entraremos em contato.'
        });
      })
      .catch((error) => {
        console.error('Erro ao enviar email:', error);
        Toast.show({
          type: 'error',
          text1: 'Erro',
          text2: 'Não foi possível enviar o email. Tente novamente mais tarde.'
        });
      });
  };
  
  return (
    <View style={StoreContactScreenStyles.container}>
      <Text style={StoreContactScreenStyles.title}>Bem vindo(a)!</Text>
      <Text style={StoreContactScreenStyles.subtitle}>Receba nosso contato através do email:</Text>
      <Image
        source={require('../assets/images/union-background.png')}
        style={StoreContactScreenStyles.filterIcon}
      />
      <View style={StoreContactScreenStyles.inputContainer}>
      <TextInput
        style={StoreContactScreenStyles.input}
        placeholder="Email"
        placeholderTextColor="black"
        value={email}
        onChangeText={setEmail}
      />
      </View>
      <PrimaryButton
        title="Enviar"
        onPress={sendEmail}  // Use a função sendEmail aqui
      />
    <Toast />
    </View>
  );
};

export default StoreContactScreen;
