import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';

var { height, width } = Dimensions.get('window');

export default class BadgeActivity extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { source_image, background_color, border_color } = this.props;

    return (
      <View
        style={{
          width: width / 2 - 30,
          height: width / 2 - 30,
          borderRadius: 20,
          borderWidth: 4.5,
          marginTop: 20,
          backgroundColor: background_color,
          borderColor: border_color,
        }}>
        <View style={{ flex: 2 }}>
          <Image
            style={{
              flex: 1,
              width: null,
              height: 50,
              resizeMode:'contain',
              padddingTop: 30,
              paddingBottom: 0,
            }}
            source={source_image}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            alignContent:'center',
            justifyContent: 'space-evenly',
            paddingLeft: 10,
            paddingTop: 0,
          }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', alignContent: 'center' }}>
            {this.props.title}
          </Text>
        </View>
      </View>
    );
  }
}


