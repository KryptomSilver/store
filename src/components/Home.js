import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';


const Home = () => {
  return (
    <SafeAreaView>
      <Nav titulo="Expresstore"/>
      <ScrollView>
        <ListProduct />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
