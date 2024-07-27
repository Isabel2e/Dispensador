import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


//importar screen Principal
import MenuPrincipal from "./screen/Dash/MenuPrincipal";
import ScreenLuces from "./screen/Luces/ScreenLuces";
import ScreenSetting from "./screen/Setting/ScreenSetting";
import ScreenUser from "./screen/User/ScreenUser";
import ScreenPuerta from "./screen/Puertas/ScreenPuerta";
import UserDetalles from "./screen/User/UserDetalles";
import Logginp2 from "./screen/Login/Logginp2";
import Formulariouser from "./screen/Login/FromnuevoUser";
import Editaruser from "./screen/User/Editaruser";
import Nuevouser from "./screen/User/Nuevouser";
import ScreenRiego from "./screen/Riego/ScreenRiego";
import AgregarPlanta from "./screen/Riego/AgregarPlanta";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// ya no funciona desde que se creo navegacion2
function MyStack () {
    return (
       <Stack.Navigator>
        <Stack.Screen name="Usuarios" component={ScreenUser}/>
        <Stack.Screen name="Detalles" component={UserDetalles}/>
        <Stack.Screen name="nuevouser" component={Nuevouser}/>
        <Stack.Screen name="Ajustes" component={ScreenSetting}/>
        <Stack.Screen name="editarUser" component={Editaruser}/>
       </Stack.Navigator>
    )
}

function MyStackMenu () {
    return (
       <Stack.Navigator>
        <Stack.Screen name="menu" component={MenuPrincipal} options={{ headerShown: false }}/>
        <Stack.Screen name="Dashboard" component={ScreenRiego}/>
        <Stack.Screen name="Gráficas" component={ScreenLuces}/>
        <Stack.Screen name="Controlador" component={ScreenPuerta}/>
        <Stack.Screen name="Agregar planta" component={AgregarPlanta}/>
       </Stack.Navigator>
    )
}

function Mytabs (){
    return(
        <Tab.Navigator initialRouteName="menu" screenOptions={{tabBarActiveTintColor:'#729D39'}}>
        <Tab.Screen options={{ headerShown: false , tabBarBadge:'2',tabBarIcon:({color,size})=>(<MaterialCommunityIcons name="home" size={size} color={color} />)}} name="Menú" component={MyStackMenu} />
        <Tab.Screen options={{headerShown:false,tabBarIcon:({color,size})=>(<MaterialCommunityIcons name="account-supervisor-circle" size={size} color={color} />)}} name="Usuarios" component={MyStack}/>
        <Tab.Screen options={{tabBarIcon:({color,size})=>(<MaterialCommunityIcons name="cog" size={size} color={color} />)}} name="Ajustes" component={ScreenSetting}/>
        </Tab.Navigator>
    )
};

export default function Navegation () {
    return(
        
         <Mytabs/>
        
    )
}