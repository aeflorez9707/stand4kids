import React from 'react';
import { View, Image } from 'react-native';
import { Text, Content } from 'native-base';
import styles from '../../../../assets/styles/styles';
import HeaderDefault from '../../../components/Header/HeaderDefault';
import logo from '../../../../assets/images/social.png';
export default class About extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <View style={styles.drawerContainer}>
        <HeaderDefault title="Quiénes somos"/>
        <Content padder>
          <Text style={styles.descTxt}>
            Stand4kids es un grupo de ingenieros biomédicos de  La Universidad de Los Andes interesados
            en promover la detección temprana de factores de riesgo en el desarrollo psicomotor de niños
            entre los 0 y 12 meses, con el objetivo de ayudar a prevenir y diagnosticas oportunamente
            trastornos en el sistema nervioso.
          </Text>
          <Text style={styles.txtAbout}>
            Contáctanos
          </Text>
          <View style={styles.container}>
           <Image source={logo} style={styles.socialNetworks} />
          </View>
        </Content>
      </View>
    );
  }



}
