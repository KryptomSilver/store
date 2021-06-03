import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Registro from './Registro';
import Nav from '../layout/Nav';
import ListProduct from '../components/ListProduct'

const Home = () => {
  return (
    <SafeAreaView>
      <Nav titulo="Expresstore" />
      <ScrollView>
        <ListProduct />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
