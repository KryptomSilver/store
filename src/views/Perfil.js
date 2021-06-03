import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Text, View, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import style from '../assets/styles/style';
import Nav from '../layout/Nav';

const Perfil = () => {
  return (
    <SafeAreaView>
      <Nav titulo="Perfil" />
      <View style={style.contenedor}>
        <View style={styles.logo}>
          <FontAwesomeIcon icon={faUserCircle} size={100} color={'black'} />
        </View>

        <View style={styles.inputgroup}>
          <Text style={styles.texto}>Usuario Registrado:</Text>
          <TextInput
            placeholder="Ayeza Zamudio"
            style={styles.input}
            placeholderTextColor="#bfbfbf"
            editable={false}
            selectTextOnFocus={false}
          />
        </View>
        <View style={styles.inputgroup}>
          <Text style={styles.texto}>Nombre Completo:</Text>
          <TextInput
            placeholder="Ayeza Elizabeth Zamudio Comino"
            style={styles.input}
            placeholderTextColor="#bfbfbf"
            editable={false}
            selectTextOnFocus={false}
          />
        </View>
        <View style={styles.inputgroup}>
          <Text style={styles.texto}>Correo Electronico:</Text>
          <TextInput
            placeholder="ayezahmvc14@gmail.com"
            style={styles.input}
            placeholderTextColor="#bfbfbf"
            editable={false}
            selectTextOnFocus={false}
          />
        </View>
        <View style={styles.inputgroup}>
          <Text style={styles.texto}>Contraseña:</Text>
          <TextInput
            placeholder="ayeza123"
            style={styles.input}
            placeholderTextColor="#bfbfbf"
            editable={false}
            selectTextOnFocus={false}
          />
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

export default Perfil;
