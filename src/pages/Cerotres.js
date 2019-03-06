import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar, TextInput,TouchableHighlight,
    Animated, ScrollView, Dimensions,ImageBackground, Image, TouchableOpacity} from 'react-native';
import Logocerotres from '../components/Logocerotres'
import CerotresBotones from '../components/Cerotresbotones'
import {Actions} from 'react-native-router-flux'
export default class Cerotres extends React.Component {

  render() {
    return (
      <View style={styles.container}>
       <Logocerotres/>
       <CerotresBotones/>
       </View>


    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  btnLogin: {
      width: 300,
      height: 45,
      borderRadius: 25,
      backgroundColor:'#fb8c00' ,
      justifyContent:'center' ,
      textAlign:'center' ,
      marginTop:-20

    },

  signupButton: {
    color: "black",
    fontSize: 17,
    textAlign:'center',
    fontWeight:'bold',
    fontWeight:'500'

  }
});
