import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import 'firebase/auth';
import { getFunctions, httpsCallable } from 'firebase/functions';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAQZn2Nt2uO4nVo7FA3GGkix5idfdHGKtI',
  authDomain: 'tech4med-43b95.firebaseapp.com',
  projectId: 'tech4med-43b95',
  storageBucket: 'tech4med-43b95.appspot.com',
  messagingSenderId: '738922399838',
  appId: '1:738922399838:web:b419a00bd87916aa788ccf',
};
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const functions = getFunctions(app); // Usando a instância do app do Firebase

export { auth, app };
