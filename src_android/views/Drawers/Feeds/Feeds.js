import React from 'react';
import { View, ActivityIndicator, Image,TouchableOpacity,SafeAreaView,Platform,ScrollView,
  Dimensions,StatusBar,TextInput } from 'react-native';
import { Text, Content, Card, CardItem, Thumbnail, Left, Body, Right,Button,Icon } from 'native-base';
import styles from '../../../../assets/styles/styles';
import { Actions } from 'react-native-router-flux';
import HeaderDefault from '../../../components/Header/HeaderDefault';
import axios from 'axios';
import Category from '../../../components/Explore/Category'
const { height, width } = Dimensions.get('window')
export default class Feeds extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      data: []
    }
  }
  componentWillMount() {
       this.startHeaderHeight = 80
       if (Platform.OS == 'android') {
           this.startHeaderHeight = 100 + StatusBar.currentHeight
       }
   }

  render() {
    return (
      <View style={styles.drawerContainer}>
        <HeaderDefault title="Menú principal"/>
        <Content padder>

        <SafeAreaView style={{ flex: 1 }}>
                 <View style={{ flex: 1 }}>
                     
                     <ScrollView
                         scrollEventThrottle={16}
                     >
                         <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                             <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                 What can we help you find, Varun?
                             </Text>

                             <View style={{ height: 130, marginTop: 20 }}>
                                 <ScrollView
                                     horizontal={true}
                                     showsHorizontalScrollIndicator={false}
                                 >
                                     <Category imageUri={require('../../../../assets/images/activity.jpeg')}
                                         name="Home"
                                     />
                                     <Category imageUri={require('../../../../assets/images/activity.jpeg')}
                                         name="Experiences"
                                     />
                                     <Category imageUri={require('../../../../assets/images/activity.jpeg')}
                                         name="Resturant"
                                     />
                                 </ScrollView>
                             </View>
                             <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                 <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                     Introducing Airbnb Plus
                                 </Text>
                                 <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                     A new selection of homes verified for quality & comfort

                                 </Text>
                                 <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                     <Image
                                         style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                         source={require('../../../../assets/images/activity.jpeg')}
                                     />

                                 </View>
                             </View>
                         </View>
                     </ScrollView>

                 </View>
 </SafeAreaView>



        <TouchableOpacity onPress={() => Actions.desarrollo( Actions.midesarrollo())}>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('../../../../assets/images/babySee.png')} />
              <Body>
                <Text>Actividades</Text>
                <Text note>0-3 meses</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={require('../../../../assets/images/activity.jpeg')}
            style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
        </TouchableOpacity>


       <TouchableOpacity onPress={() => Actions.desarrollo( Actions.midesarrollo())}>
       <Card>
         <CardItem>
           <Left>
             <Thumbnail source={require('../../../../assets/images/babySee.png')} />
             <Body>
               <Text>Seguimiento</Text>
               <Text note></Text>
             </Body>
           </Left>
         </CardItem>
         <CardItem cardBody>
           <Image source={require('../../../../assets/images/activity.jpeg')}
           style={{height: 200, width: null, flex: 1}}/>
         </CardItem>
         <CardItem>
           <Left>
             <Button transparent>
               <Icon active name="thumbs-up" />
               <Text>12 Likes</Text>
             </Button>
           </Left>
           <Body>
             <Button transparent>
               <Icon active name="chatbubbles" />
               <Text>4 Comments</Text>
             </Button>
           </Body>
           <Right>
             <Text>11h ago</Text>
           </Right>
         </CardItem>
       </Card>
       </TouchableOpacity>

       <TouchableOpacity onPress={() => Actions.desarrollo( Actions.midesarrollo())}>
       <Card>
         <CardItem>
           <Left>
             <Thumbnail source={require('../../../../assets/images/babySee.png')} />
             <Body>
               <Text>Por decidir</Text>
               <Text note></Text>
             </Body>
           </Left>
         </CardItem>
         <CardItem cardBody>
           <Image source={require('../../../../assets/images/activity.jpeg')}
           style={{height: 200, width: null, flex: 1}}/>
         </CardItem>
         <CardItem>
           <Left>
             <Button transparent>
               <Icon active name="thumbs-up" />
               <Text>12 Likes</Text>
             </Button>
           </Left>
           <Body>
             <Button transparent>
               <Icon active name="chatbubbles" />
               <Text>4 Comments</Text>
             </Button>
           </Body>
           <Right>
             <Text>11h ago</Text>
           </Right>
         </CardItem>
       </Card>
       </TouchableOpacity>

        </Content>

      </View>
    );
  }

  }
