import React from 'react';
import { View, ActivityIndicator, Image,TouchableOpacity } from 'react-native';
import { Text, Content, Card, CardItem, Thumbnail, Left, Body, Right,Button,Icon } from 'native-base';
import styles from '../../../../assets/styles/styles';
import { Actions } from 'react-native-router-flux';
import HeaderDefault from '../../../components/Header/HeaderDefault';
import axios from 'axios';

export default class Feeds extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      data: []
    }
  }



  render() {
    return (
      <View style={styles.drawerContainer}>
        <HeaderDefault title="Menú principal"/>
        <Content padder>


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
