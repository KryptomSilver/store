import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import style from '../assets/styles/style';

const image = {
  uri:
    'https://1.bp.blogspot.com/-H9eEQtvg550/T03OFJfOOQI/AAAAAAAAHhQ/AAw7nYGzMX0/s1600/455.png',
};

const Inicio = () => (
  <View style={style.container}>
    <ImageBackground source={image} style={style.image}>
      <Text style={style.text}>Acerca de Nosotros</Text>

      <Text style={style.text1}>
        Somos una pequeña empresa dedicada a la venta de cosmeticos al mayoreo y
        menudeo, donde podras encontrar un amplio surtido para todas tus
        necesidades.
      </Text>
    </ImageBackground>
  </View>
);

export default Inicio;
