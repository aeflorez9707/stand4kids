import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import HeaderDefault from '../../components/Header/HeaderBack';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <HeaderDefault title="Directorio"  />
        <View style={{ paddingLeft: 30, flex: 1, paddingTop: 30 }}>
        
         
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              paddingHorizontal: 30,
              paddingTop: 10,
            }}>
            Usuario: Alvaro
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              paddingHorizontal: 30,
              paddingTop: 10,
            }}>
            Tu EPS: ECOPETROL
          </Text>
        </View>
        <ScrollView>
        <View style={{ flexDirection: 'row', paddingLeft: 30, flex: 5 }}>  
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'space-evenly',
            }}>
            <Text style={styles.title}>Doctor</Text>
            <Text style={styles.subtitle}>Alfred</Text>
            <Text style={styles.subsubtitle}>
              Especialista en hacer Front Ends.
            </Text>
            <Text style={styles.subtitle}>Alfred</Text>
            <Text style={styles.subsubtitle}>
              Especialista en hacer Front Ends.
            </Text>
            <Text style={styles.subtitle}>Alfred</Text>
            <Text style={styles.subsubtitle}>
              Especialista en hacer Front Ends.
            </Text>
            <Text style={styles.subtitle}>Alfred</Text>
            <Text style={styles.subsubtitle}>
              Especialista en hacer Front Ends.
            </Text>
          </View>
            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'space-evenly',
                paddingLeft: 30,
              }}>
              <Text style={styles.title}>Contacto</Text>
              <Text style={styles.subtitle}>6050505</Text>
              <Text style={styles.subsubtitle}>
                Oficina en la Clinica Wayne
              </Text>
              <Text style={styles.subtitle}>6050505</Text>
              <Text style={styles.subsubtitle}>
                Oficina en la Clinica Wayne
              </Text>
              <Text style={styles.subtitle}>6050505</Text>
              <Text style={styles.subsubtitle}>
                Oficina en la Clinica Wayne
              </Text>
              <Text style={styles.subtitle}>6050505</Text>
              <Text style={styles.subsubtitle}>
                Oficina en la Clinica Wayne
              </Text>
            </View>
          
        </View>
        </ScrollView>
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
  title: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10,
    color: '#5d99c6',
  },
  subtitle: { fontSize: 18, fontWeight: 'bold', paddingTop: 5 },
  subsubtitle: { fontSize: 14, fontWeight: 'light', paddingTop: 5, paddingBottom: 10 },
});
/*<Text
style={{
  fontSize: 24,
  fontWeight: '700',
  paddingHorizontal: 0,
  paddingTop: 10,
}}>
Directorio de Pediatras
</Text>
*/