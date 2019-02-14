import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar, TextInput,TouchableHighlight,
    Animated, ScrollView, Dimensions,ImageBackground, Image, TouchableOpacity} from 'react-native';
import Logosignup from '../components/Logosignup'
import Formsignup from '../components/Formsignup'
import {Actions} from 'react-native-router-flux'
export default class Signup extends React.Component {
  goBack() {
        Actions.login();
  }
  render() {
    return (
      <View style={styles.container}>
       <Logosignup/>
       <Formsignup type="Registrarse"/>
       <View style={styles.signupTextCont}>
       <Text>¿Ya tienes una cuenta?</Text>
       <TouchableOpacity onPress={this.goBack}>
       <Text style={styles.signupText}> Iniciar sesión</Text>
       </TouchableOpacity>
       </View>
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
  signupText: {
    color: "black",
    fontSize: 17,
    textAlign:'center',
    fontWeight:'bold',
    fontWeight:'500'

  }
});
