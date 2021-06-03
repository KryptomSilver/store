import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  /* Registro y Perfil */
  //Logo para el usuario
  logo: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  //Formulario
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    padding: 15,
  },
  //Form group
  inputgroup: {
    paddingTop: 15,
  },
  //Contenedor de formularios
  contenedor: {
    padding: 40,
    marginTop: 40,
  },
  //Texto de labels
  texto: {
    fontFamily: 'Roboto-Light',
    fontSize: 18,
    paddingBottom: 10,
  },
  /* Fuentes */
  roboto_r: {
    fontFamily: 'Roboto-Regular',
  },
  roboto_l: {
    fontFamily: 'Roboto-Light',
  },
  roboto_m: {
    fontFamily: 'Roboto-Medium',
  },
  /* Productos */
  productimagen: {
    height: 160,
    width: 150,
    borderRadius: 2,
  },
  producttext: {
    fontSize: 20,
    paddingLeft: 25,
    paddingTop: 0,
  },
  producttext_precio: {
    fontSize: 22,
    paddingLeft: 25,
    paddingTop: 10,
  },
  producttext_meses: {
    fontSize: 15,
    paddingLeft: 25,
    paddingTop: 10,
  },
  linea: {
    borderWidth: 0.2,
    width: '100%',
    borderColor: 'gray',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 0,
  },

  product: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 190,
    width: '100%',
    backgroundColor: 'transparent',
    paddingLeft: 30,
    paddingRight: 30,
  },
  //    backgroundColor: '#88c149'
});
export default style;
