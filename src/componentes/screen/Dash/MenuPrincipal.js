import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Asegúrate de usar el ícono correcto

const MenuPrincipal = () => {
  const Navegacion = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 30,
      }}>

      <View style={styles.header}>
        <View>
          <Text style={{fontSize:25, fontWeight:'bold'}}>Welcome to</Text>
          <Text style={{fontSize:38, fontWeight:'bold', color:"#46622B"}}>SiembraTech</Text>
        </View>
      </View>
      <View style={{marginTop:30,flexDirection:'row'}}></View>

      <View style={styles.grid}>
        <View style={styles.row}>
        <Button style={styles.gridButton} icon="toggle-switch" mode="contained" theme={{ colors: { primary: '#C6E377' } }} onPress={() => Navegacion.navigate("Controlador")}>Configuración</Button>
        <Button style={styles.gridButton} icon="chart-bar" mode="contained" theme={{ colors: { primary: '#36622B' } }} onPress={() => Navegacion.navigate("Gráficas")}>Estadisticas</Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.gridButton} icon="leaf" mode="contained" theme={{ colors: { primary: '#729D39' } }} onPress={() => Navegacion.navigate("Dashboard")}>Plantas</Button>
          <Button style={styles.gridButton} icon="folder-open-outline" mode="contained" theme={{ colors: { primary: '#A4BE7B' } }} onPress={() => Navegacion.navigate("Ajustes")}>About</Button>
        </View>
      </View> 
    </SafeAreaView>
  );
};

export default MenuPrincipal;

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent:"center"
  },
 
  grid: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  gridButton: {
    marginHorizontal: 10,
    width: 150,
    height: 150,
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 5,
  }
 
});
