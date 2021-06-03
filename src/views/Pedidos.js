import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Nav from '../layout/Nav';

const Pedidos = () => {
  return (
    <SafeAreaView>
      <Nav titulo="Pedidos" />
      <ScrollView>
        <View style={{marginTop: 60}}>
          <View style={styles.tituloitems}>
            <Text></Text>
            <Text style={styles.titulo}>Producto</Text>
            <Text style={styles.titulo}>Estado</Text>
          </View>
          <View style={{borderBottomWidth: 1, padding: 10}}></View>
          <Text style={{textAlign: 'center',fontSize:20 ,padding:10}}>Pedido 1</Text>
          <View style={styles.row}>
            <Image
              source={{
                uri:
                  'https://cdn.shopify.com/s/files/1/1365/5917/products/labial-mate-venecia-bissu_1200x.jpg?v=1612896448',
              }}
              style={styles.productimagen}
            />
            <Text>Labial Rosa</Text>
            <View style={styles.row}>
              <FontAwesomeIcon icon={faCheckCircle} size={30} color={'green'} />
              <Text style={{paddingLeft: 35}}>Recibido</Text>
            </View>
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
            <View style={styles.row}>
              <FontAwesomeIcon icon={faCheckCircle} size={30} color={'red'} />
              <Text style={{paddingLeft: 20}}>Cancelado</Text>
            </View>
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
            <View style={styles.row}>
              <FontAwesomeIcon
                icon={faCheckCircle}
                size={30}
                color={'orange'}
              />
              <Text style={{paddingLeft: 35}}>Enviado</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.folio}>Folio:</Text>
            <Text style={styles.folio}>#236287634</Text>
          </View>
        </View>
        <View style={{borderBottomWidth: 1, padding: 10}}></View>
          <Text style={{textAlign: 'center',fontSize:20 ,padding:10}}>Pedido 2</Text>
        <View style={{marginTop: 60}}>
          <View style={styles.row}>
            <Image
              source={{
                uri:
                  'https://cdn.shopify.com/s/files/1/1365/5917/products/labial-mate-venecia-bissu_1200x.jpg?v=1612896448',
              }}
              style={styles.productimagen}
            />
            <Text>Labial Rosa</Text>
            <View style={styles.row}>
              <FontAwesomeIcon icon={faCheckCircle} size={30} color={'green'} />
              <Text style={{paddingLeft: 35}}>Recibido</Text>
            </View>
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
            <View style={styles.row}>
              <FontAwesomeIcon icon={faCheckCircle} size={30} color={'green'} />
              <Text style={{paddingLeft: 35}}>Recibido</Text>
            </View>
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
            <View style={styles.row}>
              <FontAwesomeIcon
                icon={faCheckCircle}
                size={30}
                color={'orange'}
              />
              <Text style={{paddingLeft: 35}}>Enviado</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.folio}>Folio:</Text>
            <Text style={styles.folio}>#236287634</Text>
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
  folio: {
    paddingLeft: 20,
    marginTop: 5,
    fontFamily: 'Roboto-Light',
    fontSize: 18,
  },
  tituloitems: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
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
    paddingLeft: 20,
    marginTop: 5,
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
  },
});
export default Pedidos;
