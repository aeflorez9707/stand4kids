import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar, TextInput,TouchableHighlight,
    Animated, ScrollView, Dimensions,ImageBackground, Image, TouchableOpacity} from 'react-native';
export default class Form extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <TextInput
          style={styles.inputUser}
          placeholder={'Usuario'}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underLineColorAndroid='transparent'
          />
        <StatusBar backgroundColor="#f48fb1" barStyle="light-content" />
        <TextInput
        style={styles.inputPass}
        placeholder={'Contraseña'}
        secureTextEntry={true}
        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
        underLineColorAndroid='transparent'

        />
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.textLog}>Iniciar sesión </Text>
        </TouchableOpacity>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  textLog: {
    color: "black",
    fontSize: 17,
    textAlign:'center'

  },

  inputUser:  {
  width: 300,
  height: 45,
  borderRadius: 25,
  fontSize: 16,
  paddingLeft:45,
  backgroundColor:"black",
  color:'rgba(255, 255, 255, 0.7)',
  marginHorizontal:25,
  /**'rgba(0, 0, 0, 0.35)',*/
},
inputPass:  {
width: 300,
height: 45,
borderRadius: 25,
fontSize: 16,
paddingLeft:45,
backgroundColor:"black",
color:'rgba(255, 255, 255, 0.7)',
marginHorizontal:25,
marginTop:10,
/**'rgba(0, 0, 0, 0.35)',*/
},
btnLogin: {
    width: 300,
    height: 45,
    borderRadius: 25,
    backgroundColor:'#fb8c00' ,
    justifyContent:'center' ,
    textAlign:'center' ,
    marginTop:20

  }
  });
