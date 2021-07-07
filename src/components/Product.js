import React from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import style from '../assets/styles/style';

const Product = ({product}) => {
  
  return (
    <SafeAreaView>
      <View>
        <View style={style.rowitem}>
          <TouchableOpacity
            style={{
              height: 310,
              width: "70%",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: 10,
              paddingLeft: 15,
              paddingRight: 15,
              backgroundColor: '#fff',
              borderRadius: 8,
              marginLeft: 5,
              marginRight: 5,
              marginBottom: 0,
              marginTop: 10,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 5,
            }}>
            <Image
              source={{
                uri: product.idPhoto['imageUrl'],
              }}
              style={style.productimageni}
            />
            <View style={{marginTop: 10}}>
              <Text style={{textAlign: 'auto', textAlign: 'center',fontSize:18,paddingBottom:10}}>
                {product.nameProduct.toUpperCase()}
              </Text>
              <Text style={{textAlign: 'auto'}}>{product.description}</Text>
              <Text style={{textAlign: 'justify', fontSize: 20, textAlign: 'center'}}>
                $ {product.precioProduct}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Product;
