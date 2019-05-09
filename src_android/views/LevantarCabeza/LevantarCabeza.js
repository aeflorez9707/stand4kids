import React from 'react';
import { View, Image,TouchableOpacity, Alert } from 'react-native';
import { Text, Content } from 'native-base';
import styles from '../../../assets/styles/styles';
import HeaderBack from '../../components/Header/HeaderBack';
import logo from '../../../assets/images/smile.png';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default class LevantarCabeza extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <View style={styles.drawerContainer}>
        <HeaderBack title=""/>
        <Content padder>
        <View style={styles.container}>
         <Image source={logo} style={styles.logoSignup} />
         <Text style={styles.titulo}>
           ¿Qué debes hacer?
         </Text>
        </View>

          <Text style={styles.descTxt}>
           Acuéstame boca abajo sobre una superficie acolchada.
          </Text>
          <Text style={styles.titulo}>
            ¿Qué debes observar?
          </Text>
          <Text style={styles.descTxt}>
           Debo ser capaz de levantar mi cabeza en contra de la gravedad y rotarla hacia
           alguno de los lados. Si pataleo un poco para ayudarme y me recuesto sobre un lado es normal.
          </Text>
          <Text style={styles.titulo}>Calíficame en esta actividad</Text>
          <View style={styles.containerSignupTextCont}>
           <TouchableOpacity >
           <AntDesign name="smileo" size={50} />
           </TouchableOpacity>
           <TouchableOpacity >
           <Entypo name="emoji-neutral" size={50} />
           </TouchableOpacity>
           <TouchableOpacity full onPress={() => this.alerta()} >
           <Entypo name="emoji-sad" size={50} />
           </TouchableOpacity>
           </View>

        </Content>
      </View>
    );
  }

  alerta() {

      Alert.alert('Alerta', 'Alerta en el desarrollo');
    }
}
