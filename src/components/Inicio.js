import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://1.bp.blogspot.com/-H9eEQtvg550/T03OFJfOOQI/AAAAAAAAHhQ/AAw7nYGzMX0/s1600/455.png" };

const Inicio = () => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      
      <Text style={styles.text}>Acerca de Nosotros</Text>
     
     
      <Text style={styles.text1}>Somos una pequeña empresa dedicada a la venta de cosmeticos 
      al mayoreo y menudeo, donde podras encontrar un amplio surtido para todas tus necesidades.</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop:60,
    
  },
  image: {
    width:"100%",
    height: "100%",
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
   
  },
  text: {
    width:'100%',
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  text1: {
    color: "#630000",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    
}
});

export default Inicio;
