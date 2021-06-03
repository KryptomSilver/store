import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Registro from './Registro';
import Nav from './Nav';


const Home = () => {
  return (
    <SafeAreaView>
      <Nav titulo="Registro"/>
      
        <Registro />
    
    </SafeAreaView>
  );
};

export default Home;
