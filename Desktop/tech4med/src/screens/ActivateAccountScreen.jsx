import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ActivateAccountStyles from '../styles/ActivateAccountStyles';
import PrimaryButton from '../components/PrimaryButton';

const ActivateAccountScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleEmailChange = text => {
    setEmail(text);
    checkButtonState(text, password, confirmPassword);
  };

  const handlePasswordChange = text => {
    setPassword(text);
    checkButtonState(email, text, confirmPassword);
  };

  const handleConfirmPasswordChange = text => {
    setConfirmPassword(text);
    checkButtonState(email, password, text);
  };

  const checkButtonState = (
    emailValue,
    passwordValue,
    confirmPasswordValue,
  ) => {
    setIsButtonDisabled(
      emailValue === '' || passwordValue === '' || confirmPasswordValue === '',
    );
  };

  return (
    <View style={RegisterStyles.container}>
      <Text style={RegisterStyles.title}>Crie uma nova conta!</Text>
      <Image
        source={require('../assets/images/union-background.png')}
        style={RegisterStyles.filterIcon}
      />
      <View style={RegisterStyles.inputContainer}>
        <TextInput
          style={RegisterStyles.input}
          placeholder="Email"
          placeholderTextColor="black"
          onChangeText={handleEmailChange}
          value={email}
        />
        <TextInput
          style={RegisterStyles.input}
          placeholder="Senha"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
          value={password}
        />
        <TextInput
          style={RegisterStyles.input}
          placeholder="Confirmar senha"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={handleConfirmPasswordChange}
          value={confirmPassword}
        />
      </View>
      <PrimaryButton
        title="Cadastrar"
        onPress={() => {
          navigation.navigate('MainScreen');
        }}
        disabled={isButtonDisabled}
      />
      <TouchableOpacity
        style={RegisterStyles.linkContainer}
        onPress={() => {
          navigation.navigate('LoginScreen');
        }}>
        <Text style={RegisterStyles.linkText}>Já tenho uma conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActivateAccountScreen;
