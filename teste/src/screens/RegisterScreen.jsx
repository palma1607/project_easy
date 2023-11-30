import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RegisterStyles from '../styles/RegisterStyles';
import PrimaryButton from '../components/PrimaryButton';
import { auth, app} from '../../firebase';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const db = getFirestore(app);

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.emailVerified) {
          updateEmailVerificationStatus(user.uid);
        }
      }
    });

    return unsubscribe;
  }, []);

  function updateEmailVerificationStatus(uid) {
    const userDocRef = doc(db, 'Users', uid);

    return getDoc(userDocRef).then((docSnapshot) => {
      if (docSnapshot.exists() && !docSnapshot.data().active) {
        return setDoc(userDocRef, { active: true }, { merge: true })
          .then(() => {
            console.log('Firestore document updated with email verification status');
          })
          .catch(error => {
            console.error('Error updating document', error);
          });
      }
    });
  }

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;

        setDoc(doc(db, 'Users', user.uid), {
          email: email,
          active: false,
        })
          .then(() => {
          })
          .catch(error => {
            console.error('Erro ao criar documento no Firestore:', error);
          });

        sendEmailVerification(user)
          .then(() => {
            Alert.alert(
              'Sucesso',
              'Usuário criado com sucesso! Por favor, verifique seu e-mail.',
            );
          })
          .catch(error => {
            Alert.alert('Erro', 'Falha ao enviar e-mail de verificação.');
          });

        navigation.navigate('RegiaoScreen', { uid: user.uid, user_email: email });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Erro ao registrar', errorMessage);
      });
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
        onPress={handleRegister}
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

export default RegisterScreen;
