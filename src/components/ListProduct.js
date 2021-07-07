import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import clienteAxios from '../config/axios';
import Product from './Product';

const ListProduct = ({navigation}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      const productsAPI = await clienteAxios.get('products/');
      setProducts(productsAPI.data);
      //   console.log(productsAPI.data)
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  return (
    <View style={{marginTop: 60, marginBottom: 10}}>
      {products.map(product => (
        <Product key={product._id} product={product}  />
      ))}
    </View>
  );
};

export default ListProduct;
