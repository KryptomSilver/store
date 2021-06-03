import React from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import style from '../assets/styles/style';

const Product = () => {
  return (
    <SafeAreaView>
      <View style={style.row}>
        <View style={style.product}>
          <Image
            source={{
              uri:
                'https://cdn.shopify.com/s/files/1/1365/5917/products/labial-mate-venecia-bissu_1200x.jpg?v=1612896448',
            }}
            style={style.productimagen}
          />
          <View>
            <Text style={[style.roboto_r, style.producttext]}>Labial Rojo</Text>
            <Text style={[style.roboto_m, style.producttext_precio]}>
              $ 250
            </Text>
            <Text style={[style.roboto_l, style.producttext_meses]}>
              en 12x $ 20
            </Text>
          </View>
        </View>
      </View>
      <View style={style.linea}></View>
      <View style={style.row}>
        <View style={style.product}>
          <Image
            source={{
              uri: 'https://cdn1.coppel.com/images/catalog/pr/7048742-1.jpg',
            }}
            style={style.productimagen}
          />
          <View>
            <Text style={[style.roboto_r, style.producttext]}>Esponja</Text>
            <Text style={[style.roboto_m, style.producttext_precio]}>
              $ 150
            </Text>
            <Text style={[style.roboto_l, style.producttext_meses]}>
              en 12x $ 20
            </Text>
          </View>
        </View>
      </View>

      <View style={style.linea}></View>
      <View style={style.row}>
        <View style={style.product}>
          <Image
            source={{
              uri:
                'https://images-na.ssl-images-amazon.com/images/I/71Z7kavqetL._SY355_.jpg',
            }}
            style={style.productimagen}
          />
          <View>
            <Text style={[style.roboto_r, style.producttext]}>Pinceles</Text>
            <Text style={[style.roboto_m, style.producttext_precio]}>
              $ 550
            </Text>
            <Text style={[style.roboto_l, style.producttext_meses]}>
              en 12x $ 20
            </Text>
          </View>
        </View>
      </View>

      <View style={style.linea}></View>
      <View style={style.row}>
        <View style={style.product}>
          <Image
            source={{
              uri:
                'https://cdn.shopify.com/s/files/1/1365/5917/products/labial-mate-venecia-bissu_1200x.jpg?v=1612896448',
            }}
            style={style.productimagen}
          />
          <View>
            <Text style={[style.roboto_r, style.producttext]}>Labial</Text>
            <Text style={[style.roboto_m, style.producttext_precio]}>
              $ 550
            </Text>
            <Text style={[style.roboto_l, style.producttext_meses]}>
              en 12x $ 20
            </Text>
          </View>
        </View>
      </View>
      <View style={style.linea}></View>
    </SafeAreaView>
  );
};

export default Product;
