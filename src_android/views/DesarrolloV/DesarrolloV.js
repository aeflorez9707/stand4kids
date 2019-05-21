import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  WebView,
  Slider,
  ScrollView,
} from 'react-native';

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
    const url = 'https://www.youtube.com/watch?v=HFbMezYW858';

    return (
      <View style={{ flex: 1 }}>
        <View style={{ marginTop: 30, marginBottom:20 }}>
          <Text
            style={{ fontSize: 30, fontWeight: '700', paddingHorizontal: 20, color:'#CE90EB' }}>
            Desarrollo Visual
          </Text>
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
            <Text style={styles.subtitle}>Aléjate de mí a más de 30 centímetros.  </Text>

            <Text style={styles.title}>¿Que debes observar?</Text>
            <Text style={styles.subtitle}> Mis ojos se desplazarán sin rumbo fijo, lo que es normal a mi edad. Mi mejor campo de visión está entre los 20,3 y los 30 centímetros.   </Text>

            <Text style={styles.title}>¿Lograste observar estas características en mí?</Text>
            <Text style={styles.subtitle} />
            <QualActivity
              title = "0"
              description="No tenía la mirada fija desde antes de los 30 centímetros"
              background_color = "#CE90EB"
             />
            <QualActivity
              title = "1"
              description="A veces no tengo la mirada fija por lo que es difícil ver la diferencia pero a veces, te miro y mis ojos se desplazan sin rumbo fijo cuando te alejas"
              background_color = "#90D3EB"
             />
            <QualActivity
              title = "2"
              description="Mis ojos se desplazan sin rumbo fijo cuando te alejas a más de 30 centímetros"
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
