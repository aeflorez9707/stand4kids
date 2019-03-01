import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar, TextInput,TouchableHighlight,
    Animated, ScrollView, Dimensions,ImageBackground, Image, TouchableOpacity} from 'react-native';
import addBaby from '../imagenes/baby.png'
export default class Logoperfil extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Image source={addBaby} style={styles.logo} />
      <Text style={styles.logoText}>Crea el perfil de tu bebé</Text>
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
    justifyContent:'flex-end',
    alignItems:'center'
  },

  logo:  {
    marginTop:-4,
    width:80,
    height:80
  }

  });
