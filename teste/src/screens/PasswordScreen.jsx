import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PasswordStyles from '../styles/PasswordStyles';
import PrimaryButton from '../components/PrimaryButton';

const PasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          onChangeText={text => setEmail(text)}
          value={email}
        />
      </View>
      <PrimaryButton
        title="Receber código por email"
        onPress={() => {
          navigation.navigate('MainScreen');
        }}
      />
      <TouchableOpacity
        style={PasswordStyles.linkContainer}
        onPress={() => {
          navigation.navigate('LoginScreen');
        }}>
        <Text style={PasswordStyles.linkText}>Já tenho uma conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordScreen;
