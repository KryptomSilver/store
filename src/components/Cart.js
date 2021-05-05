import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Nav from './Nav';

const Cart = () => {
  return (
    <SafeAreaView>
      <Nav titulo="Carrito de Compras" />
      <ScrollView>
        <View style={{marginTop: 60}}>
          <Text style={styles.titulo}>Productos (3)</Text>
          <View></View>
          <View style={styles.row}>
            <Image
              source={{
                uri:
                  'https://cdn.shopify.com/s/files/1/1365/5917/products/labial-mate-venecia-bissu_1200x.jpg?v=1612896448',
              }}
              style={styles.productimagen}
            />
            <Text>Labial Rosa</Text>
            <Text>$ 120.00</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity>
              <Text>Eliminar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Image
              source={{
                uri:
                  'https://cdn.shopify.com/s/files/1/1365/5917/products/labial-mate-venecia-bissu_1200x.jpg?v=1612896448',
              }}
              style={styles.productimagen}
            />
            <Text>Labial Rosa</Text>
            <Text>$ 120.00</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity>
              <Text>Eliminar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Image
              source={{
                uri:
                  'https://cdn.shopify.com/s/files/1/1365/5917/products/labial-mate-venecia-bissu_1200x.jpg?v=1612896448',
              }}
              style={styles.productimagen}
            />
            <Text>Labial Rosa</Text>
            <Text>$ 120.00</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity>
              <Text>Eliminar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contenedor}>
            <View style={styles.total}>
              <Text>Envio:</Text>
              <Text>$ 100.00</Text>
            </View>
            <View style={styles.total}>
              <Text style={{fontSize: 20}}>Total con envio:</Text>
              <Text style={{fontSize: 20}}>$ 340.00</Text>
            </View>

            <View style={styles.row}>
              <TouchableOpacity style={styles.boton}>
                <Text style={{color: 'white', fontSize: 15}}>
                  Continuar compra
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    borderTopColor: 'black',
    borderTopWidth: 1,
    marginTop: 50,
    paddingTop: 5,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  borde: {
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
  productimagen: {
    height: 90,
    width: 90,
    borderRadius: 10,
  },
  boton: {
    backgroundColor: '#88c149',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginTop: 20,
  },
  total: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  titulo: {
    padding: 10,
    marginTop: 20,
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Cart;
