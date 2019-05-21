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
import HeaderBack from '../../components/Header/HeaderBack';
export default class App extends Component {
  onNavigationStateChange = navState => {
    if (navState.url.indexOf('https://www.google.com') === 0) {
      const regex = /#access_token=(.+)/;
      let accessToken = navState.url.match(regex)[1];
      console.log(accessToken);
    }
  };
  render() {
    const url = 'https://www.youtube.com/watch?v=Tpl0u-I4R3s';

    return (
      <View style={{ flex: 1 }}>
      <HeaderBack title="Sonidos"/>
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
            <Text style={styles.subtitle}>Al cambiarme de entorno o tener movimientos repentinos. </Text>

            <Text style={styles.title}>¿Que debes observar?</Text>
            <Text style={styles.subtitle}>Tendré una amplia gama de gruñiditos, gemidos, estornudos o hipos pero no te preocupes, es normal. </Text>

            <Text style={styles.title}>¿Lograste observar estas características en mí?</Text>
            <Text style={styles.subtitle} />
            <QualActivity
              title = "0"
              description="No tuve reacción alguna"
              background_color = "#CE90EB"
             />
            <QualActivity
              title = "1"
              description="De vez en cuando reacciono a los cambios de entorno"
              background_color = "#90D3EB"
             />
            <QualActivity
              title = "2"
              description="Reacciono con alguna de las expresiones"
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
