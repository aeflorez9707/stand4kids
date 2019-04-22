import React from 'react';
import { View, StatusBar, AsyncStorage, Image,TextInput,TouchableOpacity } from 'react-native';
import { Text, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import styles from '../../../assets/styles/styles';
import logo from '../../../assets/images/oso.png';
export default class Main extends React.Component {

  constructor() {
    super()
    this.state = {
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

  componentWillMount() {
    //
    // check if user is logged in
    //
    AsyncStorage.getItem('userLoggedIn', (err, userData) => {
      if(userData === null || userData === undefined || userData === '') {
        return false;
      }else{
        Actions.drawer({type: 'reset'});
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.containerBear}>
        <Image source={logo} style={styles.logoBear} />
         <Text style={styles.logoBearText}>Mati beta</Text>
        </View>
        <TextInput
        style={styles.inputUser}
        placeholder={'Usuario'}
        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
        underLineColorAndroid='transparent'
        keyboardType="email-address"
        />
    <Ionicons name={'ios-person'} size={28} color="white" style={styles.inputIcon}/>
      <TextInput
      style={styles.inputPass}
      placeholder={'Contraseña'}
      secureTextEntry={this.state.showPass}
      placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
      underLineColorAndroid='transparent'
      />
      <Ionicons name={'ios-lock'} size={28} color="white" style={styles.passIcon}/>
      <TouchableOpacity style={styles.eyeIcon}
        onPress={this.showPass.bind(this)}>
        <Ionicons name={this.state.press==false ? 'ios-eye' : 'ios-eye-off'} size={26} color="white" />
      </TouchableOpacity>
      <TouchableOpacity  style={styles.btnLogin}>
        <Text style={styles.textLog}>Iniciar sesión</Text>
      </TouchableOpacity>
      <View style={styles.containerSignupTextCont}>
       <Text>¿Aún no tienes cuenta?</Text>
       <TouchableOpacity ><Text style={styles.signupButton}> Regístrate</Text>
       </TouchableOpacity>
       </View>

      </View>
    );
  }


  signIn() {
    Actions.signin();
  }

  signUp() {
    Actions.signup();
  }
}
