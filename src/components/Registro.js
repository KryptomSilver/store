import React from 'react'
import {TextInput, StyleSheet, View, Button} from 'react-native';

const Registro = () => {
    return (
        <View style={styles.container}>
            <TextInput
              value=""
              placeholder={'Ingresa tu Nombre de usuario'}
              style={styles.input}
            />
            <TextInput        
              placeholder={'Ingresa tu Nombre Completo'}
              style={styles.input}
            />
             <TextInput        
              placeholder={'Ingresa tu Ciudad'}
              style={styles.input}
            />
             <TextInput        
              placeholder={'Ingresa tu Correo Electronico'}
              style={styles.input}
            />
             <TextInput        
              placeholder={'Crea una Contraseña'}
              style={styles.input}
            />
            
            <Button
              title={'Registrar'}
              style={styles.input}
            />
          </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        marginTop: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
      },
      input: {
        width: 400,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: "#17a8c2",
        marginBottom: 10,
      },
    });

export default Registro