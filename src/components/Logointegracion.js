import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar, TextInput,TouchableHighlight,
    Animated, ScrollView, Dimensions,ImageBackground, Image, TouchableOpacity} from 'react-native';
import logo from '../imagenes/puzzle.png'
export default class Logointegracion extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.logoText}>0-3 Meses: integración sensorial</Text>
       <Image source={logo} style={styles.logo} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  logoText:  {
    color: "#000000",
    fontWeight: '500',
    marginVertical: 15,
    fontSize: 20,
    paddingLeft:1
  },

  logo:  {

    width:180,
    height:180,
  }

  });
