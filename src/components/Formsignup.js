import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar, TextInput,TouchableHighlight,
    Animated, ScrollView, Dimensions,ImageBackground, Image, TouchableOpacity} from 'react-native';
import { Picker } from 'react-native-picker-dropdown'
import Icon from 'react-native-vector-icons/Ionicons'
export default class Formsignup extends React.Component {
  constructor(){
    super();
    this.state = { language: 'js'  }
    this.onValueChange = this.handleValueChange.bind(this)
    this.state={
      PickerValue:'',
      showPass:true,
      press: false
    }
  };
  showPass= ()=>{
    if (this.state.press==false){
      this.setState({showPass:false,press:true})
    }else{
      this.setState({showPass:true,press:false})

    }
  }
  handleValueChange(language) {
     this.setState({ language })
  }
  render() {
    return (
      <View style={styles.container}>

      <TextInput
          style={styles.inputUser}
          placeholder={'Nombre'}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underLineColorAndroid='transparent'
          onSubmitEditing={() => this.password.focus()}
          />
          <Icon name={'ios-person'} size={28} color="white" style={styles.nameIcon}/>
          <TextInput
              style={styles.inputMail}
              placeholder={'E-mail'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              underLineColorAndroid='transparent'
              onSubmitEditing={() => this.password.focus()}
              />
      <Icon name={'md-mail'} size={28} color="white" style={styles.mailIcon}/>
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
        <Picker style={styles.picker}
         selectedValue={this.state.language}
         onValueChange={this.onValueChange}
         mode="dialog"
         textStyle={styles.pickerText}
       >
         <Picker.Item label="Parentesco con el bebé" value=""/>
         <Picker.Item label="Madre" value="madre"/>
           <Picker.Item label="Padre" value="padre"/>
           <Picker.Item label="Tío/a" value="tio"/>
           <Picker.Item label="Abuelo/a" value="abuelo"/>
           <Picker.Item label="Hermano/a" value="hermano"/>
           <Picker.Item label="Pediatra" value="pediatra"/>
           <Picker.Item label="Otro cuidador" value="otro"/>
        </Picker>

        <TouchableOpacity style={styles.btnLogin}>
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
    textAlign:'center',
    marginTop:1
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
  marginTop:2
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
marginTop:2
/**'rgba(0, 0, 0, 0.35)',*/
},
inputMail:  {
width: 300,
height: 45,
borderRadius: 25,
fontSize: 16,
paddingLeft:45,
backgroundColor:"black",
color:'rgba(255, 255, 255, 0.7)',
marginHorizontal:25,
marginTop:2
/**'rgba(0, 0, 0, 0.35)',*/
},
picker:  {
  width: 300,
  height: 45,
  //backgroundColor:"white",//"#EEEEEE",
  marginHorizontal:25,
  marginTop:-5
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
  mailIcon:{
    top:-38,
    left:-125
  },
  nameIcon:{
    top:-38,
    left:-125
  },
  passIcon:{
    top:-38,
    left:-125
  },
  eyeIcon:{
    top:-65,
    left:125
    }
  });
