import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import BadgeSupport from './components/BadgeSupport';
import HeaderDefault from '../../components/Header/HeaderBack';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <HeaderDefault title="Directorio"  />
        <View style={{ paddingLeft: 30, flex: 1, paddingTop: 30 }}>
          <Text style={styles.title_view}>Centros de Apoyo</Text>
        </View>
        <View style={{ flex: 6, alignItems: 'center' }}>
          <ScrollView>
            <BadgeSupport
              title="Fundación Cero a Tres"
              direccion="Carrera 20 No. 106A-80"
              telefono="Tel: 2133678"  
              website="https://ceroatres.org/"              
              source_image = {require('./assets/cero-a-tres.png')}
              backgroundcolor="grey"
              bordercolor="grey"
            />
            <BadgeSupport
              title="Asociación Aconiño"
              direccion="Calle 127B No. 45-28 "
              telefono="Tel: 6508473"  
              website="http://www.aconino.org/"              
              source_image = {require('./assets/aconiño.png')}
              backgroundcolor="grey"
              bordercolor="grey"
            />
            <BadgeSupport
              title="Fundación niñez y desarrollo"
              direccion="Carera 3 No 19-71"
              telefono="Tel: 3108259"  
              website="http://www.fndcolombia.org/"              
              source_image = {require('./assets/FND.jpg')}
              backgroundcolor="grey"
              bordercolor="grey"
            />
            <BadgeSupport
              title="Clínica de la mujer"
              direccion="Cra 19C No. 91-17"
              telefono="Tel: 616-1799"  
              website="https://www.clinicadelamujer.com.co/"              
              source_image = {require('./assets/clinicademujer.jpeg')}
              backgroundcolor="grey"
              bordercolor="grey"
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title_view: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 0,
    paddingTop: 10,
  },
  subtitle_view: {
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10,
    color: '#0094cc',
  },
});