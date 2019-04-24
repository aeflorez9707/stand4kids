import React from 'react';
import { View, Image } from 'react-native';
import { Text, Content } from 'native-base';
import styles from '../../../assets/styles/styles';
import HeaderBack from '../../components/Header/HeaderBack';
import logo from '../../../assets/images/smile.png';
export default class Sonrie extends React.Component {

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
           Háblame, haz sonidos suaves y balbuceos.
          </Text>
          <Text style={styles.descTxt}>
           Ponme frente a un espejo.
          </Text>
          <Text style={styles.titulo}>
            ¿Qué debes observar?
          </Text>
          <Text style={styles.txtAbout}>
            Contáctanos
          </Text>

        </Content>
      </View>
    );
  }
}
