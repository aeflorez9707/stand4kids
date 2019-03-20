import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar, TextInput,TouchableHighlight,
    Animated, ScrollView, Dimensions,ImageBackground, Image, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'
import { Picker } from 'react-native-picker-dropdown'
export default class Formperfil extends React.Component {
  constructor(){
   super();
   this.state = { language: 'js'  }
   this.onValueChange = this.handleValueChange.bind(this)
   this.state={
   PickerValue:'',
   }
 };

  iniciar(){
    Actions.iniciar();
  }
  handleValueChange(language) {
      this.setState({ language })
   }
  render() {
    return (
      <View style={styles.container}>

      <TextInput
          style={styles.inputNombre}
          placeholder={'Nombre'}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underLineColorAndroid='transparent'
          />

          <TextInput
              style={styles.inputPeso}
              placeholder={'Peso de nacimiento (g)'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              underLineColorAndroid='transparent'
              />
        <StatusBar backgroundColor="#f48fb1" barStyle="light-content" />
        <TextInput
        style={styles.inputDate}
        placeholder={'Fecha de nacimiento'}
        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
        underLineColorAndroid='transparent'

        />
        <TextInput
        style={styles.inputEdad}
        placeholder={'Edad gestacional (semanas)'}
        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
        underLineColorAndroid='transparent'
        />

        <Picker style={styles.picker}
          selectedValue={this.state.language}
          onValueChange={this.onValueChange}
          mode="dialog"
          textStyle={styles.pickerText}
        >
          <Picker.Item label="Género:" value=""/>
          <Picker.Item label="Femenino" value="f"/>
            <Picker.Item label="Masculino" value="m"/>

         </Picker>

        <TouchableOpacity onPress={this.iniciar} style={styles.btnLogin}>
          <Text style={styles.textLog}>Crear</Text>
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
    color: "black",
    fontSize: 17,
    textAlign:'center',
    marginTop:1
  },
  btnLogin: {
      width: 300,
      height: 45,
      borderRadius: 25,
      backgroundColor:'#fb8c00' ,
      justifyContent:'center' ,
      textAlign:'center' ,
      marginTop:35

    },

  inputNombre:  {
  width: 300,
  height: 45,
  borderRadius: 25,
  fontSize: 16,
  paddingLeft:45,
  backgroundColor:"black",
  color:'rgba(255, 255, 255, 0.7)',
  marginHorizontal:25,
  marginTop:-10
  /**'rgba(0, 0, 0, 0.35)',*/
},
inputEdad:  {
width: 300,
height: 45,
borderRadius: 25,
fontSize: 16,
paddingLeft:45,
backgroundColor:"black",
color:'rgba(255, 255, 255, 0.7)',
marginHorizontal:25,
marginTop:10
/**'rgba(0, 0, 0, 0.35)',*/
},
picker:  {
  width: 300,
  height: 45,
  //backgroundColor:"white",//"#EEEEEE",
  marginHorizontal:25,
  marginTop:10
},
inputDate:  {
width: 300,
height: 45,
borderRadius: 25,
fontSize: 16,
paddingLeft:45,
backgroundColor:"black",
color:'rgba(255, 255, 255, 0.7)',
marginHorizontal:25,
marginTop:10
/**'rgba(0, 0, 0, 0.35)',*/
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
marginTop:10
/**'rgba(0, 0, 0, 0.35)',*/
}
  });
