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
} from '@fortawesome/free-solid-svg-icons';
const Nav = () => {
  const [menu, setMenu] = useState(false);
  const menubtn = () => {
    setMenu(current => !current);
  };
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menu} onPress={menubtn}>
          <FontAwesomeIcon icon={faBars} size={20} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.texto}>Tienda online</Text>
        <TouchableOpacity style={styles.carro}>
          <FontAwesomeIcon icon={faShoppingCart} size={20} color={'white'} />
        </TouchableOpacity>
      </View>
      <View style={menu ? styles.menuD : styles.menuDocultar}>
        <TouchableOpacity style={styles.menuDitem}>
          <FontAwesomeIcon icon={faHome} size={20} color={'white'} />

          <Text style={styles.menuDtext}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuDitem}>
          <FontAwesomeIcon icon={faHome} size={20} color={'white'} />

          <Text style={styles.menuDtext}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuDitem}>
          <FontAwesomeIcon icon={faHome} size={20} color={'white'} />

          <Text style={styles.menuDtext}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuDitem}>
          <FontAwesomeIcon icon={faHome} size={20} color={'white'} />

          <Text style={styles.menuDtext}>Home</Text>
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
  menuD: {
    position: 'absolute',
    width: '70%',
    height: 820,
    zIndex: 1,
    backgroundColor: 'brown',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 60,
  },
  menuDocultar: {
    position: 'absolute',
    width: '70%',
    height: 820,
    zIndex: 1,
    backgroundColor: 'brown',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 60,
    transform: [{translateX: -800}],
  },
  menuDitem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'gray',
    width: '75%',
    height: 45,
    marginTop: 10,
  },
  menuDtext: {
    color: 'white',
    paddingLeft: 10,
    fontSize: 12,
  },
});

export default Nav;
