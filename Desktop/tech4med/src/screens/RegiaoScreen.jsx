import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import RegiaoScreenStyles from '../styles/RegiaoScreenStyle';
import PrimaryButton from '../components/PrimaryButton';
import { getFirestore, collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';

const RegiaoScreen = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [showCities, setShowCities] = useState(false);
  const [searchText, setSearchText] = useState('');

  const route = useRoute();
  const userEmail = route.params?.user_email;

  const db = getFirestore();

  const openModalOnEnter = () => {
    if (searchText.trim()) {
      setModalVisible(true);
    }
  };

  const updateUserLocation = async (city, state, userEmail) => {
    const usersRef = collection(db, 'Users');
    const q = query(usersRef, where('email', '==', userEmail));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (document) => {
        const userDoc = doc(db, 'Users', document.id);
        await updateDoc(userDoc, {
          city: city,
          state: state
        });
      });
    } catch (error) {
      console.error("Erro ao atualizar dados do usuário:", error);
    }
  };

  const toggleModal = (shouldShowCities = false) => {
    setModalVisible(!isModalVisible);
    setShowCities(shouldShowCities);
  };

  const handleStatePress = (state) => {
    setSelectedState(state.nome);
    fetchCities(state.sigla);
    setSearchText(''); // Limpa o campo de texto
    toggleModal(true); // Abre o modal com as cidades
  };

  const handleCityPress = (city) => {
    setSelectedCity(city.nome);
    setModalVisible(false); // Fecha o modal
  };

  const handleFilterPress = () => {
    // Abre o modal e mostra os estados quando o ícone de filtro é pressionado
    setModalVisible(true);
    setShowCities(false); // Certifique-se de que está mostrando os estados primeiro
  };

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => response.json())
      .then(data => {
        setStates(data);
      })
      .catch(error => {
        console.error('Erro ao buscar estados: ', error);
      });
  }, []);

  const fetchCities = (stateSigla) => {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateSigla}/municipios`)
      .then(response => response.json())
      .then(data => {
        setCities(data);
        setShowCities(true); // Mostrar cidades depois de selecionar um estado
      })
      .catch(error => {
        console.error('Erro ao buscar cidades:', error);
      });
  };

  const filterStates = text => {
    return states.filter(state =>
      state.nome.toLowerCase().includes(text.toLowerCase()),
    );
  };

  const filterCities = text => {
    return cities.filter(city =>
      city.nome.toLowerCase().includes(text.toLowerCase()),
    );
  };

  return (
    <View style={RegiaoScreenStyles.container}>
      <Text style={RegiaoScreenStyles.title}>
        Em qual região do Brasil você está?
      </Text>
      <View style={RegiaoScreenStyles.searchContainer}>
      <TextInput
          style={RegiaoScreenStyles.searchInput}
          placeholder="Pesquisar"
          value={searchText}
          onChangeText={text => setSearchText(text)}
          onSubmitEditing={openModalOnEnter} // Chama a função quando o usuário pressiona Enter
          returnKeyType="search" // Muda o botão do teclado para "Search"
        />
        <TouchableHighlight onPress={handleFilterPress}>
          <Image
            source={require('../assets/images/filter-icon.png')}
            style={RegiaoScreenStyles.filterIcon}
          />
        </TouchableHighlight>
      </View>

      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
      <ScrollView>
        <View style={RegiaoScreenStyles.modal}>
          {!showCities ? (
            filterStates(searchText).map((state) => ( // Aplica o filtro diretamente aqui
              <TouchableHighlight
                key={state.id}
                onPress={() => handleStatePress(state)}
              >
                <Text>{state.nome}</Text>
              </TouchableHighlight>
            ))
          ) : (
            filterCities(searchText).map((city) => ( // Aplica o filtro diretamente aqui
              <TouchableHighlight
                key={city.id}
                onPress={() => handleCityPress(city)}
              >
                <Text>{city.nome}</Text>
              </TouchableHighlight>
            ))
          )}
        </View>
      </ScrollView>
    </Modal>
      <View style={RegiaoScreenStyles.locationContainer}>
        <Image
          source={require('../assets/images/earth-americas.png')}
          style={RegiaoScreenStyles.earthIcon}
        />
        <View style={RegiaoScreenStyles.textContainer}>
          <Text style={RegiaoScreenStyles.locationCity}>{selectedCity}</Text>
          <Text style={RegiaoScreenStyles.locationState}>{selectedState}</Text>
        </View>
      </View>

      {isModalVisible && (
        <Modal animationType="slide" transparent={true} visible={isModalVisible}>
          <ScrollView>
            <View style={RegiaoScreenStyles.modal}>
              {cities.length === 0 ? (
                states.filter(state => state.nome.toLowerCase().includes(searchText.toLowerCase())).map(state => (
                  <TouchableHighlight
                    key={state.id}
                    onPress={() => {
                      setSelectedState(state.nome);
                      fetchCities(state.sigla);
                    }}>
                    <Text>{state.nome}</Text>
                  </TouchableHighlight>
                ))
              ) : (
                cities.filter(city => city.nome.toLowerCase().includes(searchText.toLowerCase())).map(city => (
                  <TouchableHighlight
                    key={city.id}
                    onPress={() => {
                      setSelectedCity(city.nome);
                      setModalVisible(false);
                    }}>
                    <Text>{city.nome}</Text>
                  </TouchableHighlight>
                ))
              )}
            </View>
          </ScrollView>
        </Modal>
      )}

      <PrimaryButton
        title="Avançar"
        onPress={() => {
          console.log(selectedCity, selectedState, userEmail);
          if (selectedCity && selectedState && userEmail) {
            updateUserLocation(selectedCity, selectedState, userEmail);
            navigation.navigate('MainScreen');
          } else {
            console.log('One or more conditions not met');
          }
        }}

      />
    </View>
  );
};

export default RegiaoScreen;