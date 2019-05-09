import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar,TouchableHighlight,
   Animated, ScrollView, Dimensions,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'
import { Content } from 'native-base';
import styles from '../../../assets/styles/styles';
import HeaderDefault from '../../components/Header/HeaderBack';
export default class Motricidad extends React.Component {
  render() {
    return (
      <View style={styles.drawerContainer}>
      <HeaderDefault style={styles.textLog} title=""/>
      <Content padder style={styles.container}>
        <TouchableOpacity onPress={() => Actions.desarrollo( Actions.levantarCabeza())} style={styles.btn03}>
          <Text style={styles.textLog} >Levanto la cabeza</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn36}>
          <Text style={styles.textLog}>Boca abajo</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.btn69}>
          <Text style={styles.textLog}>Agarremos juguetes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn912}>
          <Text style={styles.textLog}>Manos y pies</Text>
        </TouchableOpacity>
        </Content>
      </View>
    );
  }
}
