import React from 'react';
import { View, Alert, AsyncStorage,Text,Image,TextInput,TouchableOpacity,StatusBar   } from 'react-native';
import { Content, Form, Item, Input, Label} from 'native-base';
import HeaderSign from '../../components/Header/HeaderSign';
import styles from '../../../assets/styles/styles';
import logo from '../../../assets/images/addPerson.png';
import { Picker } from 'react-native-picker-dropdown'
import { Ionicons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';

export default class Signup extends React.Component {

  constructor() {
    super()
    this.state = { language: 'js'  }
    this.onValueChange = this.handleValueChange.bind(this)
    this.state = {
      showPass:true,
      press: false,
      PickerValue:'',
      yourFullName: '',
      yourEmail: '',
      yourPassword: '',
      repeatPassword: '',
      btnDisable: false,
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
      <StatusBar backgroundColor="#f48fb1" barStyle="light-content" />
      <View style={styles.containerBear}>
      <Image source={logo} style={styles.logoSignup} />
       <Text style={styles.logoBearText}>Registrarse</Text>
      </View>

      <TextInput
              style={styles.inputUser}
              placeholder={'Nombre'}
              onChangeText={(txt) => this.setState({yourFullName: txt})}
              value={this.state.yourFullName}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              underLineColorAndroid='transparent'

              />
              <Ionicons name={'ios-person'} size={28} color="white" style={styles.inputIconLogin}/>
              <TextInput
                  style={styles.inputMail}
                  placeholder={'E-mail'}
                  onChangeText={(txt) => this.setState({yourEmail: txt})}
                  value={this.state.yourEmail}
                  placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                  underLineColorAndroid='transparent'

                  />
            <Ionicons name={'md-mail'} size={28} color="white" style={styles.mailIcon}/>
            <TextInput
            style={styles.inputPass}
            placeholder={'Contraseña'}
            secureTextEntry={this.state.showPass}
            onChangeText={(txt) => this.setState({yourPassword: txt})}
            value={this.state.yourPassword}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underLineColorAndroid='transparent'


            />
            <Ionicons name={'ios-lock'} size={28} color="white" style={styles.passIcon}/>
            <TouchableOpacity style={styles.eyeIcon}
            onPress={this.showPass.bind(this)}>
            <Ionicons name={this.state.press==false ? 'ios-eye' : 'ios-eye-off'} size={26} color="white" />
            </TouchableOpacity>
            <TextInput
            style={styles.confirmPass}
            placeholder={'Confirme contraseña'}
            secureTextEntry={this.state.showPass}
            onChangeText={(txt) => this.setState({repeatPassword: txt})}
            value={this.state.repeatPassword}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underLineColorAndroid='transparent'
            />
            <Ionicons name={'ios-lock'} size={28} color="white" style={styles.passIcon}/>
            <TouchableOpacity style={styles.eyeIcon}
            onPress={this.showPass.bind(this)}>
            <Ionicons name={this.state.press==false ? 'ios-eye' : 'ios-eye-off'} size={26} color="white" />
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

        <TouchableOpacity style={styles.btnRegistrarse}
        full onPress={() => this.join()} disabled={this.state.btnDisable}>
        <Text style={styles.textLog}>Registrarse</Text>
        </TouchableOpacity>
        <View style={styles.containerSignupTextCont}>
         <Text>¿Ya tienes cuenta?</Text>
         <TouchableOpacity  onPress={() => Actions.pop()} >
         <Text style={styles.signupButton}>Inicia sesión</Text>
         </TouchableOpacity>
         </View>
      </View>
    );
  }

  join() {
    this.setState({btnDisable: true});

    if(this.state.yourFullName === '') {
      this.setState({btnDisable: false});
      Alert.alert('Error', 'Nombre completo requerido');
      return false;
    }

    if(this.state.yourEmail === '') {
      this.setState({btnDisable: false});
      Alert.alert('Error', 'Correo electrónico requerido');
      return false;
    }

    if(this.state.yourPassword === '') {
      this.setState({btnDisable: false});
      Alert.alert('Error', 'Contraseña requerida');
      return false;
    }

    if(this.state.yourPassword.length < 6) {
      this.setState({btnDisable: false});
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
      return false;
    }

    if(this.state.repeatPassword === '') {
      this.setState({btnDisable: false});
      Alert.alert('Required', 'Confirmación de la contraseña requerida');
      return false;
    }

    if(this.state.repeatPassword !== this.state.yourPassword) {
      this.setState({btnDisable: false});
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return false;
    }

    //
    // sample save data (replace with your backend API)
    //
    var saveData = {
      yourFullName: this.state.yourFullName,
      yourEmail: this.state.yourEmail,
      yourPassword: this.state.yourPassword
    };

    AsyncStorage.removeItem('userData');
    AsyncStorage.setItem('userLoggedIn', 'YES');
    AsyncStorage.setItem('userData', JSON.stringify(saveData));
    Actions.drawer({type: 'reset'});
  }
}
