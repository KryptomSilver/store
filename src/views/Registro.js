import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  TextInput,
  View,
  Button,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import style from '../assets/styles/style';
import clienteAxios from '../config/axios';
import Nav from '../layout/Nav';

const Registro = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const onSubmit = async () => {
    const datos = {
      email,
      password,
      address: direccion,
      name,
      username,
    };
    try {
      const respuesta = await clienteAxios.post('/users', datos);
      await AsyncStorage.setItem('@token', respuesta.data.token);
      navigation.navigate('Home');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SafeAreaView>
      <Nav titulo="Registro" />
      <ScrollView>
        <View style={[{marginTop: 40}, style.contenedor]}>
          <View style={style.logo}>
            <FontAwesomeIcon icon={faUserCircle} size={100} color={'black'} />
          </View>
          <View style={style.inputgroup}>
            <Text style={style.texto}>Nombre usuario:</Text>
            <TextInput
              value={username}
              placeholder={'Ingresa tu Nombre de usuario'}
              placeholderTextColor="#bfbfbf"
              style={style.input}
              onChangeText={setUsername}
            />
          </View>
          <View style={style.inputgroup}>
            <Text style={style.texto}>Nombre:</Text>
            <TextInput
              placeholder={'Ingresa tu Nombre Completo'}
              placeholderTextColor="#bfbfbf"
              style={style.input}
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={style.inputgroup}>
            <Text style={style.texto}>Dirección:</Text>
            <TextInput
              placeholder={'Ingresa tu Dirección'}
              style={style.input}
              placeholderTextColor="#bfbfbf"
              value={direccion}
              onChangeText={setDireccion}
            />
          </View>
          <View style={style.inputgroup}>
            <Text style={style.texto}>Correo:</Text>
            <TextInput
              placeholderTextColor="#bfbfbf"
              placeholder={'Ingresa tu Correo Electronico'}
              style={style.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={style.inputgroup}>
            <Text style={style.texto}>Contraseña:</Text>
            <TextInput
              placeholder={'Crea una Contraseña'}
              placeholderTextColor="#bfbfbf"
              style={style.input}
              value={password}
              onChangeText={setpassword}
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
                {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}
              onPress={() => onSubmit()}>
              <Text style={[style.roboto_l, {fontSize: 18, color: 'white'}]}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registro;
