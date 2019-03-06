import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar, TextInput,TouchableHighlight,
    Animated, ScrollView, Dimensions,ImageBackground, Image, TouchableOpacity, Picker} from 'react-native';
import {Actions} from 'react-native-router-flux'
export default class Cerotresbotones extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity style={styles.btn03}>
          <Text style={styles.textLog}>Integración sensorial</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn36}>
          <Text style={styles.textLog}>Motricidad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn69}>
          <Text style={styles.textLog}>Comunicación-Lenguaje</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn912}>
          <Text style={styles.textLog}>Reflejos</Text>
        </TouchableOpacity>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent:'center',
    alignItems:'center'
  },

  textLog: {
    color: "#000000",
    fontWeight: '500',
    marginVertical: 15,
    fontSize: 20,
    textAlign:'center',
    paddingLeft:10

  },
  btn03: {
      width: 280,
      height: 40,
      borderRadius: 25,
      backgroundColor:'#fb8c00' ,
      justifyContent:'center' ,
      textAlign:'center' ,
      marginTop:35

    },
btn36: {
  width: 280,
  height: 40,
  borderRadius: 25,
  backgroundColor:'#fb8c00' ,
  justifyContent:'center' ,
  textAlign:'center' ,
  marginTop:35

      },
btn69: {
  width: 280,
  borderRadius: 25,
  height: 40,
  backgroundColor:'#fb8c00' ,
  justifyContent:'center' ,
  textAlign:'center' ,
  marginTop:35

     },
btn912: {
  width: 280,
  height: 40,
  borderRadius: 25,
  backgroundColor:'#fb8c00' ,
  justifyContent:'center' ,
  textAlign:'center' ,
  marginTop:35

       },
logoText:  {
  color: "#000000",
  fontWeight: '500',
  marginVertical: 15,
  fontSize: 20,
  paddingLeft:34
          },
inputPeso:  {
width: 300,
height: 45,
borderRadius: 25,
fontSize: 16,
paddingLeft:45,
backgroundColor:"black",
color:'rgba(255, 255, 255, 0.7)',
marginHorizontal:25,
marginTop:2
/**'rgba(0, 0, 0, 0.35)',*/
}
  });
