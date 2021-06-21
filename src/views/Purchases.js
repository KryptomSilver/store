import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Nav from '../layout/Nav';
import style from '../assets/styles/style';
const Pedidos = () => {
  return (
    <SafeAreaView>
      <Nav titulo="Mis compras" />
      <ScrollView>
        <View style={{marginTop: 60}}>
          <TouchableOpacity style={style.row}>
            <View style={style.product}>
              <Image
                source={{
                  uri:
                    'https://cdn.shopify.com/s/files/1/1365/5917/products/labial-mate-venecia-bissu_1200x.jpg?v=1612896448',
                }}
                style={style.productimagen}
              />
              <View>
                <Text
                  style={[
                    style.roboto_l,
                    style.producttext,
                    style.successText,
                  ]}>
                  Entregado
                </Text>
                <Text style={[style.roboto_l, style.producttext_desc]}>
                  Llego el 7 de marzo. Puedes devolverlo hasta el 27 de marzo.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={style.linea}></View>
          <TouchableOpacity style={style.row}>
            <View style={style.product}>
              <Image
                source={{
                  uri:
                    'https://images-na.ssl-images-amazon.com/images/I/71Z7kavqetL._SY355_.jpg',
                }}
                style={style.productimagen}
              />
              <View>
                <Text
                  style={[style.roboto_l, style.producttext, style.dangerText]}>
                  Cancelado por el vendedor
                </Text>
                <Text style={[style.roboto_l, style.producttext_desc]}>
                  La compra se cancelo
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={style.linea}></View>
          <TouchableOpacity style={style.row}>
            <View style={style.product}>
              <Image
                source={{
                  uri:
                    'https://cdn1.coppel.com/images/catalog/pr/7048742-1.jpg',
                }}
                style={style.productimagen}
              />
              <View>
                <Text
                  style={[style.roboto_l, style.producttext, style.warnigText]}>
                  En transito
                </Text>
                <Text style={[style.roboto_l, style.producttext_desc]}>
                  En transito. Se encuentra en las offinas de paqueteria de
                  Colima.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={style.linea}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pedidos;
