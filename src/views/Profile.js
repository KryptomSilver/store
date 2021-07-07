import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TextInput, View, StyleSheet} from 'react-native';
import style from '../assets/styles/style';
import Nav from '../layout/Nav';
import clienteAxios from '../config/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      try {
        const token = await AsyncStorage.getItem('@token');
        if (token !== null) {
          clienteAxios.defaults.headers.common['x-auth-token'] = token;
          const productsAPI = await clienteAxios.get('auth/');
          setUser(productsAPI.data.userAuth);
          console.log(productsAPI.data.userAuth);
        } else {
          delete clienteAxios.defaults.headers.common['x-auth-token'];
        }
      } catch (e) {
        console.log(e);
      }
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  return (
    <SafeAreaView>
      <Nav titulo="Perfil" />
      <View style={style.contenedor}>
        <View style={styles.logo}>
          <FontAwesomeIcon icon={faUserCircle} size={100} color={'black'} />
        </View>
        <View style={styles.inputgroup}>
          <Text style={styles.texto}>Usuario Registrado:</Text>
          <TextInput style={style.input} editable={false}>
            {user.username}
          </TextInput>
        </View>
        <View style={styles.inputgroup}>
          <Text style={styles.texto}>Nombre Completo:</Text>
          <TextInput style={style.input} editable={false}>
            {user.name}
          </TextInput>
        </View>
        <View style={styles.inputgroup}>
          <Text style={styles.texto}>Correo Electronico:</Text>
          <TextInput style={style.input} editable={false}>
            {user.email}
          </TextInput>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  logo: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    padding: 15,
  },
  inputgroup: {
    paddingTop: 25,
  },
  contenedor: {
    padding: 40,
  },
  texto: {
    fontFamily: 'Roboto-Light',
    fontSize: 18,
    paddingBottom: 10,
  },
});
export default Profile;
