import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

const Product = () => {
  return (
    <SafeAreaView>
      <View style={styles.row}>
        <View style={styles.product}>
          <Text style={styles.producttext}>Producto 1</Text>
          <Image
            source={{
              uri:
                'https://cdn.shopify.com/s/files/1/1365/5917/products/labial-mate-venecia-bissu_1200x.jpg?v=1612896448',
            }}
            style={styles.productimagen}
          />
          <TouchableOpacity style={styles.productadd}>
            <FontAwesomeIcon icon={faCartPlus} size={25} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={styles.product}>
          <Text style={styles.producttext}>Producto 2</Text>
          <Image
            source={{
              uri:
                'https://cdn.shopify.com/s/files/1/1365/5917/products/plumin-delineador-negro-bissu_933x.jpg?v=1612972425',
            }}
            style={styles.productimagen}
          />
          <TouchableOpacity style={styles.productadd}>
            <FontAwesomeIcon icon={faCartPlus} size={25} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.product}>
          <Text style={styles.producttext}>Producto 3</Text>
          <Image
            source={{
              uri: 'https://cdn1.coppel.com/images/catalog/pr/7048742-1.jpg',
            }}
            style={styles.productimagen}
          />
          <TouchableOpacity style={styles.productadd}>
            <FontAwesomeIcon icon={faCartPlus} size={25} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={styles.product}>
          <Text style={styles.producttext}>Producto 4</Text>
          <Image
            source={{
              uri:
                'https://cdn.shopify.com/s/files/1/1365/5917/products/maquillaje-polvo-compacto-pebble-bissu_1200x.jpg?v=1612918121',
            }}
            style={styles.productimagen}
          />
          <TouchableOpacity style={styles.productadd}>
            <FontAwesomeIcon icon={faCartPlus} size={25} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.product}>
          <Text style={styles.producttext}>Producto 3</Text>
          <Image
            source={{
              uri:
                'https://images-na.ssl-images-amazon.com/images/I/71Z7kavqetL._SY355_.jpg',
            }}
            style={styles.productimagen}
          />
          <TouchableOpacity style={styles.productadd}>
            <FontAwesomeIcon icon={faCartPlus} size={25} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={styles.product}>
          <Text style={styles.producttext}>Producto 4</Text>
          <Image
            source={{
              uri:
                'https://cdn.shopify.com/s/files/1/1365/5917/products/labial-mate-venecia-bissu_1200x.jpg?v=1612896448',
            }}
            style={styles.productimagen}
          />
          <TouchableOpacity style={styles.productadd}>
            <FontAwesomeIcon icon={faCartPlus} size={25} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.product}>
          <Text style={styles.producttext}>Producto 3</Text>
          <Image
            source={{
              uri:
                'https://cdn.shopify.com/s/files/1/1365/5917/products/labial-mate-venecia-bissu_1200x.jpg?v=1612896448',
            }}
            style={styles.productimagen}
          />
          <TouchableOpacity style={styles.productadd}>
            <FontAwesomeIcon icon={faCartPlus} size={25} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={styles.product}>
          <Text style={styles.producttext}>Producto 4</Text>
          <Image
            source={{
              uri:
                'https://cdn.shopify.com/s/files/1/1365/5917/products/labial-mate-venecia-bissu_1200x.jpg?v=1612896448',
            }}
            style={styles.productimagen}
          />
          <TouchableOpacity style={styles.productadd}>
            <FontAwesomeIcon icon={faCartPlus} size={25} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.product}>
          <Text style={styles.producttext}>Producto 3</Text>
          <Image
            source={{
              uri:
                'https://cdn.shopify.com/s/files/1/1365/5917/products/labial-mate-venecia-bissu_1200x.jpg?v=1612896448',
            }}
            style={styles.productimagen}
          />
          <TouchableOpacity style={styles.productadd}>
            <FontAwesomeIcon icon={faCartPlus} size={25} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={styles.product}>
          <Text style={styles.producttext}>Producto 4</Text>
          <Image
            source={{
              uri:
                'https://cdn.shopify.com/s/files/1/1365/5917/products/labial-mate-venecia-bissu_1200x.jpg?v=1612896448',
            }}
            style={styles.productimagen}
          />
          <TouchableOpacity style={styles.productadd}>
            <FontAwesomeIcon icon={faCartPlus} size={25} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  productimagen: {
    height: 90,
    width: 90,
    borderRadius: 10,
  },
  producttext: {
    fontSize: 18,
    padding: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 5,
  },
  product: {
    display: 'flex',
    alignItems: 'center',
    height: 220,
    width: 180,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  productadd: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#88c149',
    color: 'white',
    marginTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 8,
    paddingTop: 8,
    borderRadius: 4,
  },
});
export default Product;
