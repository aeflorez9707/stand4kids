import React from 'react';
import { Text, View } from 'react-native';
import { Router, Scene, Drawer, ActionConst,Tabs, Stack } from 'react-native-router-flux';
import { AntDesign } from '@expo/vector-icons';
// Views
import Signin from '../views/Signin/Signin';
import Signup from '../views/Signup/Signup';
import Main from '../views/Main/Main';
import Cerotres from '../views/Cerotres/Cerotres';
import Integracion from '../views/Integracion/Integracion';
import Motricidad from '../views/Motricidad/Motricidad';
import Sonrie from '../views/Sonrie/Sonrie';
import Veamos from '../views/Veamos/Veamos';
import LevantarCabeza from '../views/LevantarCabeza/LevantarCabeza';
// Drawers
import DrawerContent from '../components/Drawer/DrawerContent';
import Feeds from '../views/Drawers/Feeds/Feeds';
import About from '../views/Drawers/About/About';
import Midesarrollo from '../views/Drawers/Midesarrollo/Midesarrollo';
import Network from '../views/Drawers/Network/Network';
import Avatar from '../views/Drawers/Avatar/Avatar';
// Tabs
import Tab1 from '../views/Tabs/Tab1/Tab1'
import Tab2 from '../views/Tabs/Tab2/Tab2';
import Tab3 from '../views/Tabs/Tab3/Tab3';

const Tabicon = ({focused, iconName, title}) => {

    var color = focused ? '#ED4C67' : '#999';
    return (
        <View style={{width: 80, alignItems: 'center'}}>
            <AntDesign size={25} name={iconName} color={color} />
            <Text style={{color: color, fontSize: 8, fontFamily: 'OpenSans-Regular'}}>{title}</Text>
        </View>
    );
  }


const Routes = () => {
    return(
        <Router>
            <Scene key="root">

                <Scene initial key="main" title="Main" component={Main} hideNavBar />
                <Scene key="signin" title="Signin" component={Signin} hideNavBar />
                <Scene key="signup" title="Signup" component={Signup} hideNavBar />
                <Drawer
                    key="drawer"
                    contentComponent={DrawerContent}
                    type={ActionConst.RESET}
                    hideNavBar>
                    <Tabs
                        key="tabbar"
                        legacy={true}
                        swipeEnabled={true}
                        tabBarPosition={'bottom'}
                        showLabel={false}
                        lazy={true}
                        animationEnabled={true}
                        hideNavBar>

                        <Stack
                            key="tab1"
                            title="Tab1"
                            icon={Tabicon}
                            iconName="bars"
                            hideNavBar>

                            <Scene key="tab1" title="Tab1" component={Feeds} hideNavBar />
                        </Stack>

                        <Stack
                            key="tab2"
                            title="Tab2"
                            icon={Tabicon}
                            iconName="infocirlceo"
                            hideNavBar>

                            <Scene key="tab2" title="Tab2" component={Tab2} hideNavBar />
                        </Stack>
                        <Stack
                            key="tab3"
                            title="Tab3"
                            icon={Tabicon}
                            iconName="infocirlceo"
                            hideNavBar>

                            <Scene key="tab3" title="Tab3" component={Tab3} hideNavBar />
                        </Stack>
                    </Tabs>

                    <Scene key="feeds" title="Feeds" component={Feeds} hideNavBar />
                    <Scene key="desarrollo" title="desarrollo" hideNavBar>
                    <Scene key="midesarrollo" title="Midesarrollo" component={Midesarrollo} hideNavBar/>
                    <Scene key="cerotres" title="Cerotres" component={Cerotres} hideNavBar/ >
                    <Scene key="integracion" title="Integracion" component={Integracion} hideNavBar/ >
                    <Scene key="sonrie" title="Sonrie" component={Sonrie} hideNavBar/ >
                    <Scene key="veamos" title="Veamos" component={Veamos} hideNavBar/ >
                    <Scene key="motricidad" title="Motricidad" component={Motricidad} hideNavBar/ >
                    <Scene key="levantarCabeza" title="Levantar" component={LevantarCabeza} hideNavBar/ >
                    </Scene>

                    <Scene key="network" title="Network" component={Network} hideNavBar/ >
                    <Scene key="about" title="About" component={About} hideNavBar />


                </Drawer>

                <Scene key="avatar" title="Avatar" component={Avatar} hideNavBar />

            </Scene>
        </Router>
    )
};

export default Routes;
