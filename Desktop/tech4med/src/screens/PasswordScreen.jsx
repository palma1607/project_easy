import React, { useState } from 'react';
import { View, Text, TextInput, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PasswordStyles from '../styles/PasswordStyles';
import PrimaryButton from '../components/PrimaryButton';
import { auth } from '../../firebase'; 
import { sendPasswordResetEmail } from 'firebase/auth';

const PasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleSendPasswordResetEmail = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert(
          'E-mail Enviado',
          'Um e-mail de recuperação de senha foi enviado. Verifique sua caixa de entrada.'
        );
        navigation.navigate('LoginScreen');
      })
      .catch((error) => {
        Alert.alert(
          'Erro',
          'Erro ao enviar e-mail de recuperação de senha. Tente novamente.'
        );
        console.error('Error sending password reset email:', error);
      });
  };

  return (
    <View style={PasswordStyles.container}>
      <Text style={PasswordStyles.title}>Esqueceu sua senha?</Text>
      <Image
        source={require('../assets/images/union-background.png')}
        style={PasswordStyles.filterIcon}
      />
      <View style={PasswordStyles.inputContainer}>
        <TextInput
          style={PasswordStyles.input}
          placeholder="Email"
          placeholderTextColor="black"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <PrimaryButton
        title="Enviar"
        onPress={handleSendPasswordResetEmail}
      />
    </View>
  );
};

export default PasswordScreen;
