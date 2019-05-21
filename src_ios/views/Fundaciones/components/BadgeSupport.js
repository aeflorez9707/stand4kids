import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';

var { height, width } = Dimensions.get('window');

export default class BadgeSupport extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { source_image, border_color } = this.props;

    return (
      <View
        style={{
          width: width * 0.85,
          height: width * 0.5,
          flexDirection: 'row',
          borderRadius: 30,
          borderWidth: 2.0,
          borderColor: border_color,
          marginBottom: 20,
        }}>
        <View style={{ flex: 2, marginLeft: 10 }}>
          <Image
            style={{ flex: 1, width: null, height: null, resizeMode: 'center' }}
            source={source_image}
          />
        </View>
        <View
          style={{
            flex: 2,
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
            paddingLeft: 15,
          }}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.subtitle}>{this.props.direccion}</Text>
          <Text style={styles.subsubtitle}>{this.props.telefono}</Text>
          <Text style={styles.subsubtitle}>{this.props.website}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 10,
    color: '#5d99c6',
    alignContent: 'center',
  },
  subtitle: { fontSize: 14, 
  paddingLeft: 5, 
  paddingRight: 5 },
  subsubtitle: {
    fontSize: 12,
    fontWeight: 'light',
    paddingTop: 0,
    paddingLeft: 5,
    paddingBottom: 0,
  },
});
