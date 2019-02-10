import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar, TextInput,TouchableHighlight,
    Animated, ScrollView, Dimensions,ImageBackground, Image, TouchableOpacity} from 'react-native';
import logo from '../imagenes/oso.png'
export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Image source={logo} style={styles.logo} />
       <Text style={styles.logoText}>Stand4kids</Text>
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
  logoText:  {
    color: "#000000",
    fontWeight: '500',
    marginTop: 10,
    fontSize: 20,
    paddingLeft:34
  },

  logo:  {

    width:180,
    height:120,
  }

  });
