import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginStyles from '../styles/LoginStyles';
import PrimaryButton from '../components/PrimaryButton';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const loginUser = async () => {
    if (email === '' || password === '') {
      alert('Por favor insira email e senha!');
      return;
    }
  
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('MainScreen');
    } catch (error) {
      alert("Erro ao fazer login: " + error.message);
    }
  };
  

  const handleEmailChange = text => {
    setEmail(text);
    checkButtonState(text, password);
  };

  const handlePasswordChange = text => {
    setPassword(text);
    checkButtonState(email, text);
  };

  const checkButtonState = (emailValue, passwordValue) => {
    setIsButtonDisabled(emailValue === '' || passwordValue === '');
  };

  return (
    <View style={LoginStyles.container}>
      <Text style={LoginStyles.title}>Bem vindo(a) de novo!</Text>
      <Image
        source={require('../assets/images/union-background.png')}
        style={LoginStyles.filterIcon}
      />
      <View style={LoginStyles.inputContainer}>
        <TextInput
          style={LoginStyles.input}
          placeholder="Email"
          placeholderTextColor="black"
          onChangeText={handleEmailChange}
          value={email}
          autoCapitalize='none'
        />
        <TextInput
          style={LoginStyles.input}
          placeholder="Senha"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
          value={password}
        />
      </View>
      <PrimaryButton
        title="Login"
        onPress={loginUser}
        disabled={isButtonDisabled}
      />

      <TouchableOpacity
        style={LoginStyles.linkContainer}
        onPress={() => {
          navigation.navigate('RegiaoScreen');
        }}>
        <Text style={LoginStyles.linkText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={LoginStyles.linkContainer}
        onPress={() => {
          navigation.navigate('RegisterScreen');
        }}>
        <Text style={LoginStyles.linkText}>Crie uma nova conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
