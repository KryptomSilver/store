import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Nav from '../layout/Nav';
import ListProduct from '../components/ListProduct'
const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <Nav titulo="Expresstore" navigation={navigation}/>
      <ScrollView>
        <ListProduct navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
