import React, { Component } from 'react';
import {
  Alert,
  Text,
  View,
  StyleSheet,
  WebView,
  Slider,
  Button,
} from 'react-native';

export default class SliderActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Initial Value of slider
      sliderValue: '1',
    };
  }

  render() {

    const { background_color } = this.props;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          borderRadius: 10,
          borderWidth: 0,
          marginTop: 10,
          marginHorizontal: 15,
        }}>
        <View style={{ backgroundColor: background_color, flex: 1, borderRadius: 5 }}>
          <Button
            onPress={() => {
              Alert.alert('You pressed the button!');
            }}
            title={this.props.title}
            color="white"
          />
        </View>
        <View style={{ flex: 2, alignContent: 'center', alignItems: 'center' }}>
          <Text>{this.props.description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
});
