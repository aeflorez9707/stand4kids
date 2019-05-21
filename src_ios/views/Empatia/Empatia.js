import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  WebView,
  Slider,
  ScrollView,
} from 'react-native';
import HeaderBack from '../../components/Header/HeaderBack';
import QualActivity from './components/QualActivity';

export default class App extends Component {
  onNavigationStateChange = navState => {
    if (navState.url.indexOf('https://www.google.com') === 0) {
      const regex = /#access_token=(.+)/;
      let accessToken = navState.url.match(regex)[1];
      console.log(accessToken);
    }
  };
  render() {
    const url = 'https://www.youtube.com/watch?v=Imqmgn_H5N8';

    return (
      <View style={{ flex: 1 }}>
      <HeaderBack title="Empatía"/>
        <View style={{ marginTop: 30, marginBottom:20 }}>
        </View>
        <View style={{ flex: 1.5, marginLeft:40, marginRight:40 }}>
          <WebView
            source={{
              uri: url,
            }}
            onNavigationStateChange={this.onNavigationStateChange}
            startInLoadingState
            scalesPageToFit
            javaScriptEnabled
            style={{ height: 300, width: 300 }}
          />
        </View>
        <View style={{ flex: 3 }}>
          <ScrollView>
            <Text style={styles.title}>¿Que debes hacer?</Text>
            <Text style={styles.subtitle}>Realiza distintas expresiones a 15 o 20 centímetros de mi carita.   </Text>

            <Text style={styles.title}>¿Que debes observar?</Text>
            <Text style={styles.subtitle}> Puedo imitar tus expresiones más simples. </Text>

            <Text style={styles.title}>¿Lograste observar estas características en mí?</Text>
            <Text style={styles.subtitle} />
            <QualActivity
              title = "0"
              description="No realizo ninguna expresión"
              background_color = "#CE90EB"
             />
            <QualActivity
              title = "1"
              description="A veces imito tus expresiones pero no siempre"
              background_color = "#90D3EB"
             />
            <QualActivity
              title = "2"
              description="Siempre hago las mismas expresiones que me muestras"
              background_color = "#E4EB90"
             />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 20,
    paddingLeft: 20,
    color: '#5d99c6',
    alignContent: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '300',
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 18,

  },

});
