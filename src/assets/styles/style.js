import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  btn: {
    backgroundColor: '#1f9bcf',
    height: 50,
    borderRadius: 4,
    width: '60%',
  },
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
    color: "#000"
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
  successText: {
    color: '#23a127',
    fontStyle: 'italic',
  },
  warnigText: {
    color: '#e3ab05',
    fontStyle: 'italic',
  },
  dangerText: {
    color: '#d9372e',
    fontStyle: 'italic',
  },
  productimagen: {
    height: 100,
    width: 100,
    borderRadius: 2,
  },
  productitem: {
    height: 310,
    width: 195,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 0,
    marginTop: 10,
  },
  rowitem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center'
  },
  contenedorproduct: {
    backgroundColor: '#e6e6e6',
    paddingBottom: 10,
  },
  productimageni: {
    height: 150,
    width: 150,
    borderRadius: 2,
  },
  producttext: {
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 0,
  },
  producttext_desc: {
    fontSize: 16,
    paddingLeft: 25,
    paddingRight: 90,
    textAlign: 'justify',
    paddingTop: 5,
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
  },
  product: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 160,
    width: '100%',
    backgroundColor: 'transparent',
    paddingLeft: 10,
    paddingRight: 10,
  },
  //    backgroundColor: '#88c149'
  /*-- About Us --*/
  container: {
    marginTop: 60,
  },
  image: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    width: '100%',
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
  text1: {
    color: '#630000',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  /* Contenedor login */
  contenedorLogin: {
    padding: 40,
  },
  /* Cart */
  itemCard: {
    marginBottom: 10,
    borderWidth: 0.2,
    width: '100%',
    borderColor: 'gray',
    backgroundColor: '#fff',
  },
  footerCart: {
    borderWidth: 0.2,
    width: '100%',
    borderColor: 'gray',
    backgroundColor: '#fff',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default style;
