import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar, TextInput,TouchableHighlight,
    Animated, ScrollView, Dimensions,ImageBackground, Image, TouchableOpacity} from 'react-native';
import Logo from '../components/Logo'
import Form from '../components/Form'
export default class Login extends React.Component {

  render() {
    return (
      <View style={styles.container}>
       <Logo/>
       <Form/>
       <View style={styles.signupTextCont}>
       <Text>Si no tienes cuenta registrate acá</Text>
       </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupTextCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
