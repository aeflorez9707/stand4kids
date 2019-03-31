import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar,TouchableHighlight,
    Animated, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'
import { Content } from 'native-base';
import styles from '../../../assets/styles/styles';
import HeaderDefault from '../../components/Header/HeaderDefault';
export default class Cerotres extends React.Component {
  render() {
    return (
        <View style={styles.drawerContainer}>
        <HeaderDefault style={styles.textLog} title="0-3 meses"/>
        <Content padder style={styles.container}>
        <TouchableOpacity  onPress={() => Actions.desarrollo( Actions.integracion())} style={styles.btn03}>
          <Text style={styles.textLog}>Integración sensorial</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn36}>
          <Text style={styles.textLog}>Motricidad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn69}>
          <Text style={styles.textLog}>Comunicación-Lenguaje</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn912}>
          <Text style={styles.textLog}>Reflejos</Text>
        </TouchableOpacity>
        </Content>
      </View>
    );
  }
}
