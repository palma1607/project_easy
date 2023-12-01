import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ProductsScreenStyles from '../styles/ProductsScreenStyles';

const ProductsScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(115);

  const handleQuantityChange = (delta) => {
    const newQuantity = Math.max(0, quantity + delta);
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * 115);
  };

  return (
    <View style={ProductsScreenStyles.container}>
      <View style={ProductsScreenStyles.banner}>
        <View style={ProductsScreenStyles.textContainer}>
          <Text style={ProductsScreenStyles.bannerTitle}>Medicação</Text>
        </View>
        <Image
          source={require('../assets/images/3d-medicine.png')}
          style={ProductsScreenStyles.bannerIcon}
        />
      </View>
      <Text style={ProductsScreenStyles.header}>Adicione os medicamentos:</Text>
      
      <View style={ProductsScreenStyles.footerContainer}>
      
      <View style={ProductsScreenStyles.quantityContainer}>
        <TouchableOpacity onPress={() => handleQuantityChange(-1)}>
          <Text style={ProductsScreenStyles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={ProductsScreenStyles.quantityText}>{quantity}</Text>
        <TouchableOpacity onPress={() => handleQuantityChange(1)}>
          <Text style={ProductsScreenStyles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={ProductsScreenStyles.buyButton}>
        <Text style={ProductsScreenStyles.buyButtonText}> Comprar R${totalPrice},00</Text>
      </TouchableOpacity>
      
    </View>
  </View>
);
};

export default ProductsScreen;
