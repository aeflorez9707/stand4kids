import React from 'react';
import { View } from 'react-native';
import { Text, Content } from 'native-base';
import styles from '../../../../assets/styles/styles';
import HeaderDefault from '../../../components/Header/HeaderBack';

export default class Tab3 extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <View style={styles.drawerContainer}>
        <HeaderDefault title="Tab40"/>
        <Content padder>
          <Text style={styles.descTxt}>
            Alo
          </Text>
        </Content>
      </View>
    );
  }
}
