import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput
} from 'react-native';

const Perfil = (prop) => {
    return (
      <View style={{ flex: 1 }}>
        <Image source={{uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F707487422702050750%2F&psig=AOvVaw1x7vLra7_KeE9heXqCCa4r&ust=1620281927048000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiandfysfACFQAAAAAdAAAAABAU',
        }}
        style={styles.productimagen}
        />
        <Text style={styles.sectionHeader}>Usuario Registrado</Text>
        <TextInput
          style={styles.itemTxt}
          defaultValue="Ayeza Zamudio"
        />
        <Text style={styles.sectionHeader}>Nombre Completo</Text>
        <TextInput
          style={styles.itemTxt}
          defaultValue="Ayeza Elizabeth Zamudio Comino"
        />
        <Text style={styles.sectionHeader}>Correo Electronico</Text>
        <TextInput
          style={styles.itemTxt}
          defaultValue="ayezahmvc14@gmail.com"
        />
        <Text style={styles.sectionHeader}>Contraseña</Text>
        <TextInput
          style={styles.itemTxt}
          defaultValue="ayeza123"
          secureTextEntry={true}
        />
        
      </View>
    );
    
  };
  const styles = StyleSheet.create({
    productimagen: {
        height: 90,
        width: 90,
        borderRadius: 10,
      },
    mainTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'red'
    },
    logoImage: {
      width: 240,
      height: 240,
      resizeMode: 'cover',
      alignSelf: 'center',
      marginTop: 30,
      marginBottom: 30
    },
    ctaButton: {
      backgroundColor: 'dodgerblue',
      color: 'white',
      borderRadius: 100
    },
    bckButton: {
      backgroundColor: 'red',
      color: 'white',
      borderRadius: 100
    },
    container: {
      flex: 1,
      paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    itemTxt: {
      padding: 10,
      fontSize: 18,
      height: 44,
      borderWidth: 1
    },
  });

export default Perfil
