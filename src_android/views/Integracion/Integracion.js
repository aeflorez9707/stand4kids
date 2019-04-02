import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar,TouchableHighlight,
   Animated, ScrollView, Dimensions,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'
import { Content } from 'native-base';
import styles from '../../../assets/styles/styles';
import HeaderDefault from '../../components/Header/HeaderBack';
export default class Integracion extends React.Component {
  render() {
    return (
      <View style={styles.drawerContainer}>
      <HeaderDefault style={styles.textLog} title="Integración sensorial"/>
      <Content padder style={styles.container}>
        <TouchableOpacity  style={styles.btn03}>
          <Text style={styles.textLog}>Sonrie conmigo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn36}>
          <Text style={styles.textLog}>Escuchemos nuevos sonidos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn69}>
          <Text style={styles.textLog}>Veamos nuevos objetos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn912}>
          <Text style={styles.textLog}>Conozcamos nuevos aromas</Text>
        </TouchableOpacity>
        </Content>
      </View>
    );
  }
}
