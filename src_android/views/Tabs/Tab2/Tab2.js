import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../../../../assets/styles/styles';
import HeaderDefault from '../../../components/Header/HeaderBack';
import BadgeActivity from './components/badgeActivity';
var { height, width } = Dimensions.get('window');

export default class Tab2 extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <View style={styles.drawerContainer}>
        <HeaderDefault title="Actividades"  />
        <ScrollView>
          <View
            style={{
              paddingHorizontal: 20,
              marginTop: 10,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={() => Actions.levantamiento()}>
            <BadgeActivity
              title="Levantamiento de cabeza"
              source_image={require('./assets/baby-mobile.png')}
              background_color="#64d8cb"
              border_color="#64d8cb"
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.desarrollov()}>
            <BadgeActivity
              title="Desarrollo Visual"
              source_image={require('./assets/abacus.png')}
              background_color="#CE90EB"
              border_color="#CE90EB"
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <BadgeActivity
              title="Reflejo  de succión"
              source_image={require('./assets/pacifier.png')}
              background_color="#90D3EB"
              border_color="#90D3EB"
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.generacion()}>
            <BadgeActivity
              title="Generación de sonidos"
              source_image={require('./assets/rattle.png')}
              background_color="#E4EB90"
              border_color="#E4EB90"
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <BadgeActivity
              title="Posición de sedente"
              source_image={require('./assets/blocks.png')}
              background_color="#EB90AC"
              border_color="#EB90AC"
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.empatia()}>
            <BadgeActivity
              title="Empatía"
              source_image={require('./assets/teddy-bear.png')}
              background_color="#EFAC4E"
              border_color="#EFAC4E"
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <BadgeActivity
              title="Reflejo del Moro"
              source_image={require('./assets/puzzle.png')}
              background_color="#EFE969"
              border_color="#EFE969"
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <BadgeActivity
              title="Flexión de extremidades"
              source_image={require('./assets/pyramid.png')}
              background_color="#A684E8"
              border_color="#A684E8"
            />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
/*<Text
style={{ fontSize: 30, fontWeight: '700', paddingHorizontal: 20 }}>
Actividades
</Text>*/
