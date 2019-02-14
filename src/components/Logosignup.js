import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar, TextInput,TouchableHighlight,
    Animated, ScrollView, Dimensions,ImageBackground, Image, TouchableOpacity} from 'react-native';
import addPerson from '../imagenes/addPerson.png'
export default class Logosignup extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Image source={addPerson} style={styles.logo} />
       <Text style={styles.logoText}>Registrarse</Text>
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
