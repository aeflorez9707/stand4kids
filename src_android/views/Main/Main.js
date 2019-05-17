import React from 'react';
import { View, StatusBar, AsyncStorage, Image,TextInput,TouchableOpacity,Alert } from 'react-native';
import { Text, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import styles from '../../../assets/styles/styles';
import * as firebase from 'firebase';
import logo from '../../../assets/images/oso.png';
export default class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showPass:true,
      press: false,
      yourEmail: '',
      yourPassword: '',
      btnDisable: false,

      //
      // ignore this state
      //
      matchEmail: '',
      matchPassword: ''
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

    //
    // check login user this is for the sample data only since i dont have backend api. ignore this function
    //
    AsyncStorage.getItem('userData', (err, userData) => {
      if(userData === null || userData === undefined || userData === '') {
        this.setState({
          matchEmail: '',
          matchPassword: ''
        });
      }else{
        var data = JSON.parse(userData);
        this.setState({
          matchEmail: data.yourEmail,
          matchPassword: data.yourPassword
        });
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
        placeholder={'e-mail'}
        onChangeText={(txt) => this.setState({yourEmail: txt})}
        value={this.state.yourEmail}
        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
        underLineColorAndroid='transparent'
        keyboardType="email-address"
        />
    <Ionicons name={'ios-person'} size={28} color="white" style={styles.inputIconLogin}/>
      <TextInput
      style={styles.inputPass}
      placeholder={'Contraseña'}
      onChangeText={(txt) => this.setState({yourPassword: txt})}
      value={this.state.yourPassword}
      secureTextEntry={this.state.showPass}
      placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
      underLineColorAndroid='transparent'
      />
      <Ionicons name={'ios-lock'} size={28} color="white" style={styles.passIcon}/>
      <TouchableOpacity style={styles.eyeIcon}
        onPress={this.showPass.bind(this)}>
        <Ionicons name={this.state.press==false ? 'ios-eye' : 'ios-eye-off'} size={26} color="white" />
      </TouchableOpacity>
      <TouchableOpacity full onPress={() => this.login()} style={styles.btnLogin}>
        <Text style={styles.textLog}>Iniciar sesión</Text>
      </TouchableOpacity>
      <View style={styles.containerSignupTextCont}>
       <Text>¿Aún no tienes cuenta?</Text>
       <TouchableOpacity full onPress={() => this.signUp()} ><Text style={styles.signupButton}> Regístrate</Text>
       </TouchableOpacity>
       </View>

      </View>
    );
  }

  login() {
    this.setState({btnDisable: true});

    if(this.state.yourEmail === '') {
      this.setState({btnDisable: false});
      Alert.alert('Error', 'Correo electrónico requerido');
      return false;
    }

    if(this.state.yourPassword === '') {
      this.setState({btnDisable: false});
      Alert.alert('Error', 'La contraseña es requerida');
      return false;
    }

    //
    // Add your backend api here
    //

    //
    // sample error message when api backend deny your request
    //
    if(this.state.matchEmail === '' && this.state.matchPassword === '') {
      this.setState({btnDisable: false});
      Alert.alert('Acceso denegado', 'Correo electrónico o contraseña incorrectos');
      return false;
    }
    firebase.auth().signInWithEmailAndPassword(this.state.yourEmail, this.state.yourPassword)
 .then(() => {AsyncStorage.setItem('userLoggedIn', 'YES'); Actions.drawer({type: 'reset'});
  }, (error) => { Alert.alert(error.message); return false; });



  }


  signIn() {
    Actions.signin();
  }

  signUp() {
    Actions.signup();
  }
}
