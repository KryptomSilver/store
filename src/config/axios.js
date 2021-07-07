import axios from 'axios';

const clienteAxios = axios.create({
  baseURL: 'https://store-react-native.herokuapp.com/api/v1/',
});

export default clienteAxios;
