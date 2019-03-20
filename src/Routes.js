import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Perfil from './pages/Perfil';
import Desarrollo from './pages/Desarrollo';
import Cerotres from './pages/Cerotres';
import Integracion from './pages/Integracion';
export default class Routes extends React.Component {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Iniciar sesión" initial={true}/>
			      <Scene key="signup" component={Signup} title="Registrarse"/>
						<Scene key="crear" component={Perfil} title="Perfil"/>
						<Scene key="iniciar" component={Desarrollo} title="Desarrollo"/>
						<Scene key="cerotres" component={Cerotres} title="Cerotres"/>
						<Scene key="integracion" component={Integracion} title="Integracion"/>
			    </Stack>
			 </Router>
			)
	}
}
