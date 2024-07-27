import { StyleSheet, Text, View,Alert } from 'react-native'
import React from 'react'
import { Button, Avatar,Card, IconButton,Divider} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from "firebase/auth"


const ScreenSetting = () => {
  const navegacion = useNavigation()
  const cerrarsesion =()=>{
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        Alert.alert('Aviso','Sesión cerrada correctamente')
        navegacion.navigate('Login');
      })
      .catch((error) => {
        console.error('Error cerrando la sesión: ', error);
      });
  }
  return (
    <View style={styles.contendor}>

    <View style={styles.cardTitleContainer}>
    <Card.Title
      title="Isabel Pablo"
      subtitle="Member since 2024"
      left={(props) => <Avatar.Text {...props} size={38} label='IP' />}
      right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
    />  
   
    <Divider />
   <View>
    <Text style={{ width:50, height:50,marginTop:20 }}>Ajustes</Text>
    <Divider/>
    <Text style={{ width:100, height:50,marginTop:20 }}>Información</Text>
    <Divider/>
   </View>
      <Text style={{marginTop:20, alignContent:"center", marginLeft:140}}>SiembraTech</Text>
      <Button style={{marginTop:20, backgroundColor:"#36622B", width:200, marginLeft:60 }} icon="logout" mode="contained" onPress={() => cerrarsesion()}>
        Cerrar Sección
      </Button>
    </View>
    </View>
  )
}

export default ScreenSetting

const styles = StyleSheet.create({
  contendor: {
    flex: 1,
    backgroundColor: '#DDDDDD'
  },
  cardTitleContainer:{
    backgroundColor: '#ffff', // Cambia esto al color que desees
    borderRadius: 10, // Opcional: añade un radio de borde si lo deseas
    padding: 20,
    margin:15 
  }





  
})