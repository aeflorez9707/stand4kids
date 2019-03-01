import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar, TextInput,TouchableHighlight,
    Animated, ScrollView, Dimensions,ImageBackground, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {Actions} from 'react-native-router-flux'
export default class Form extends React.Component {
  constructor(){
    super()
    this.state={
      showPass:true,
      press: false
    }
  }
  showPass= ()=>{
    if (this.state.press==false){
      this.setState({showPass:false,press:true})
    }else{
      this.setState({showPass:true,press:false})

    }
  }
  crear(){
    Actions.crear();
  }
  render() {
    return (
      <View style={styles.container}>

      <TextInput
          style={styles.inputUser}
          placeholder={'Usuario'}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underLineColorAndroid='transparent'
          keyboardType="email-address"
          onSubmitEditing={() => this.password.focus()}
          />
      <Icon name={'ios-person'} size={28} color="white" style={styles.inputIcon}/>
        <StatusBar backgroundColor="#f48fb1" barStyle="light-content" />
        <TextInput
        style={styles.inputPass}
        placeholder={'Contraseña'}
        secureTextEntry={this.state.showPass}
        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
        underLineColorAndroid='transparent'
        ref={(input) => this.password= input}

        />
        <Icon name={'ios-lock'} size={28} color="white" style={styles.passIcon}/>
        <TouchableOpacity style={styles.eyeIcon}
        onPress={this.showPass.bind(this)}>
          <Icon name={this.state.press==false ? 'ios-eye' : 'ios-eye-off'} size={26} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.crear} style={styles.btnLogin}>
          <Text style={styles.textLog}>{this.props.type}</Text>
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
  marginVertical:10
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
marginTop:-8,
/**'rgba(0, 0, 0, 0.35)',*/
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
  inputIcon:{
    top:-50,
    left:-125
  },
  passIcon:{
    top:-40,
    left:-125
  },
  eyeIcon:{
    top:-65,
    left:125
    }
  });
