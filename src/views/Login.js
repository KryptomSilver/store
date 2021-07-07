import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import style from '../assets/styles/style';
import clienteAxios from '../config/axios';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = async () => {
    const datos = {
      email,
      password,
    };
    try {
      const respuesta = await clienteAxios.post('/auth', datos);
      await AsyncStorage.setItem('@token', respuesta.data.token);
      navigation.navigate('Home');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView>
      <View style={[{marginTop: 120}, style.contenedorLogin]}>
        <View style={style.logo}>
          <FontAwesomeIcon icon={faUserCircle} size={100} color={'black'} />
        </View>
        <View style={style.inputgroup}>
          <Text style={style.texto}>Nombre usuario:</Text>
          <TextInput
            value={email}
            placeholder={'Ingresa tu Nombre de usuario'}
            placeholderTextColor="#bfbfbf"
            style={style.input}
            onChangeText={setEmail}
          />
        </View>
        <View style={style.inputgroup}>
          <Text style={style.texto}>Contraseña:</Text>
          <TextInput
            value={password}
            placeholder={'Ingresa tu contraseña'}
            placeholderTextColor="#bfbfbf"
            style={style.input}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        <View
          style={[
            style.inputgroup,
            {
              marginTop: 20,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <TouchableOpacity
            style={[
              style.btn,
              {display: 'flex', justifyContent: 'center', alignItems: 'center'},
            ]}
            onPress={() => onSubmit()}>
            <Text style={[style.roboto_l, {fontSize: 18, color: 'white'}]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[style.inputgroup, {marginTop: 5}]}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[
              {display: 'flex', justifyContent: 'center', alignItems: 'center'},
            ]}>
            <Text style={[style.roboto_l, {fontSize: 15, color: '#000'}]}>
              Regresar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
