import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBars,
  faHome,
  faShoppingCart,
  faSearch,
  faUser,
  faSignInAlt,
  faBox,
  faShoppingBag,
  faStore,
  faCar,
} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/core';
const Nav = ({titulo}) => {
  const [menu, setMenu] = useState(false);
  const menubtn = () => {
    setMenu(current => !current);
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menu} onPress={menubtn}>
          <FontAwesomeIcon
            icon={faBars}
            style={menu ? styles.btnmenu : styles.btn}
            size={20}
            color={'white'}
          />
        </TouchableOpacity>
        <Text style={styles.texto}>{titulo}</Text>
        <TouchableOpacity
          style={styles.carro}
          onPress={() => navigation.navigate('Cart')}>
          <FontAwesomeIcon icon={faShoppingCart} size={20} color={'white'} />
        </TouchableOpacity>
      </View>
      {/* Menu desplegable */}
      <View style={menu ? styles.menuD : styles.menuDocultar}>
        <TouchableOpacity
          style={styles.menuDitem}
          onPress={() => navigation.navigate('Home')}>
          <FontAwesomeIcon icon={faHome} size={20} color={'white'} />
          <Text style={styles.menuDtext}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuDitem}
          onPress={() => navigation.navigate('Perfil')}>
          <FontAwesomeIcon icon={faUser} size={20} color={'white'} />
          <Text style={styles.menuDtext}>Mi perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuDitem}>
          <FontAwesomeIcon icon={faSearch} size={20} color={'white'} />
          <Text style={styles.menuDtext}>Buscador</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuDitem}>
          <FontAwesomeIcon icon={faStore} size={20} color={'white'} />
          <Text style={styles.menuDtext}>Catalogo de productos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuDitem}
          onPress={() => navigation.navigate('Cart')}>
          <FontAwesomeIcon icon={faShoppingCart} size={20} color={'white'} />
          <Text style={styles.menuDtext}>Carrito de compras</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuDitem}>
          <FontAwesomeIcon icon={faShoppingBag} size={20} color={'white'} />
          <Text style={styles.menuDtext}>Mis compras</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuDitem}>
          <FontAwesomeIcon icon={faBox} size={20} color={'white'} />
          <Text style={styles.menuDtext}>Pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuDitem}>
          <FontAwesomeIcon icon={faSignInAlt} size={20} color={'white'} />
          <Text style={styles.menuDtext}>Registro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuDitem}
          onPress={() => navigation.navigate('LoginView')}>
          <FontAwesomeIcon icon={faSignInAlt} size={20} color={'white'} />
          <Text style={styles.menuDtext}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#54b4eb',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    width: '100%',
  },

  texto: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Lobster-Regular',
  },
  menu: {
    padding: 15,
    display: 'flex',
    alignItems: 'center',
  },
  carro: {
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
  },
  btn: {},
  menuD: {
    position: 'absolute',
    width: '75%',
    height: 820,
    zIndex: 1,
    backgroundColor: '#4ca3d4',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 40,
    marginTop: 60,
  },
  menuDocultar: {
    position: 'absolute',
    width: '70%',
    height: 820,
    zIndex: 1,
    backgroundColor: '#54b4eb',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 60,
    transform: [{translateX: -800}],
  },
  btnmenu: {
    transform: [{rotateZ: '90deg'}],
  },
  menuDitem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#316b8c',
    width: '87%',
    height: 45,
    marginTop: 30,
    padding: 10,
    borderRadius: 5,
  },
  menuDtext: {
    color: 'white',
    paddingLeft: 10,
    fontSize: 15,
    fontFamily: 'Roboto-Light',
  },
});

export default Nav;
