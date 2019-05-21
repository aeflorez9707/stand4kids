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
                                 Contacta a:
                             </Text>

                             <View style={{ height: 130, marginTop: 20 }}>
                                 <ScrollView
                                     horizontal={true}
                                     showsHorizontalScrollIndicator={false}
                                 >
                                 <TouchableOpacity onPress={() => Actions.profesionales()}>
                                     <Category imageUri={require('../../../../assets/images/doctor.jpg')}
                                         name="Profesionales"
                                     />
                                     </TouchableOpacity>
                                     <TouchableOpacity onPress={() => Actions.fundaciones()}>
                                     <Category imageUri={require('../../../../assets/images/cerotres.png')}
                                         name="Fundaciones"
                                     />
                                     </TouchableOpacity>
                                     <TouchableOpacity>
                                     <Category imageUri={require('../../../../assets/images/family.jpeg')}
                                         name="Otros padres"
                                     />
                                     </TouchableOpacity>
                                 </ScrollView>
                             </View>
                             <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                 <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                     Super oferta:
                                 </Text>
                                 <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                     Por registar el progreso en actividades de tu bebé tienes la
                                     posibilidad de obtener:


                                 </Text>
                                 <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                     <Image
                                         style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                         source={require('../../../../assets/images/freeDiapers.png')}
                                     />

                                 </View>
                             </View>
                         </View>
                     </ScrollView>

                 </View>
 </SafeAreaView>



        <TouchableOpacity >
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


       <TouchableOpacity >
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

       <TouchableOpacity >
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
