import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import ListProduct from './ListProduct';
import Nav from './Nav';

const Home = () => {
  return (
    <SafeAreaView>
      <Nav />
      <ScrollView>
        <ListProduct />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;