import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  TextInput,
  View,
  Button,
  SafeAreaView,
  Text,
  ScrollView,
} from 'react-native';
import style from '../assets/styles/style';
import Nav from '../layout/Nav';

const Registro = () => {
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
              value=""
              placeholder={'Ingresa tu Nombre de usuario'}
              placeholderTextColor="#bfbfbf"
              style={style.input}
            />
          </View>
          <View style={style.inputgroup}>
            <Text style={style.texto}>Nombre:</Text>
            <TextInput
              placeholder={'Ingresa tu Nombre Completo'}
              placeholderTextColor="#bfbfbf"
              style={style.input}
            />
          </View>
          <View style={style.inputgroup}>
            <Text style={style.texto}>Ciudad:</Text>
            <TextInput
              placeholder={'Ingresa tu Ciudad'}
              style={style.input}
              placeholderTextColor="#bfbfbf"
            />
          </View>
          <View style={style.inputgroup}>
            <Text style={style.texto}>Correo:</Text>
            <TextInput
              placeholderTextColor="#bfbfbf"
              placeholder={'Ingresa tu Correo Electronico'}
              style={style.input}
            />
          </View>
          <View style={style.inputgroup}>
            <Text style={style.texto}>Contraseña:</Text>
            <TextInput
              placeholder={'Crea una Contraseña'}
              placeholderTextColor="#bfbfbf"
              style={style.input}
            />
          </View>
          <View style={style.inputgroup}>
            <Button title={'Registrar'} style={style.input} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registro;
