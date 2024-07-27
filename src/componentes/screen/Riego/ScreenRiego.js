import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import FirebaseConfig from "../../../FirebaseConfig";
import { Card, Button } from "react-native-paper";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { useNavigation } from "@react-navigation/native";

const ScreenRiego = () => {
  const [plantas, setPlantas] = useState([]);
  const Navegacion = useNavigation();

  useEffect(() => {
    const db = getDatabase(FirebaseConfig.app);
    const plantasRef = ref(db, "Plantas");

    const unsubscribe = onValue(plantasRef, (snapshot) => {
      const data = snapshot.val();
      const plantasArray = data
        ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
        : [];
      setPlantas(plantasArray);
    });

    return () => unsubscribe();
  }, []);

  const eliminarPlanta = async (id) => {
    const db = getDatabase(FirebaseConfig.app);
    const plantaRef = ref(db, `Plantas/${id}`);

    try {
      await remove(plantaRef);
      Alert.alert(
        "Planta eliminada",
        "La planta ha sido eliminada correctamente."
      );
    } catch (error) {
      console.error("Error eliminando planta:", error);
      Alert.alert("Error", "Hubo un error al eliminar la planta.");
    }
  };

  const editarPlanta = (id) => {
    // Navegar a la pantalla de edición con el id de la planta
    // Aquí puedes implementar la lógica de navegación para la pantalla de edición
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title title={item.nombre} />
      <Card.Content>
        <Text>Humedad ideal: {item.humedadIdeal}%</Text>
        <Text>Temperatura Ideal: {item.temperaturaIdeal}°C</Text>
        <Text>Tiempo de crecimiento: {item.tCrecimiento} días</Text>
        <Text>Tiempo de germinación: {item.tGerminacion} días</Text>
      </Card.Content>
      <Card.Actions>
        <Button style={styles.ButtonAcciones}  theme={{ colors: { primary: "#729D39" } }}onPress={() => editarPlanta(item.id)}>Editar</Button>
        <Button style={styles.ButtonAcciones}  theme={{ colors: { primary: "#36622B" } }}onPress={() => eliminarPlanta(item.id)}>Eliminar</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.contenedor}>
      <Text style={{fontSize:25, fontWeight:'bold', color:"#46622B", paddingBottom:20}}>Administrar plantas</Text>
      <Button
        style={styles.Button}
        icon="leaf"
        mode="contained"
        theme={{ colors: { primary: "#729D39" } }}
        onPress={() => Navegacion.navigate("Agregar planta")}>
        Agregar plantas
      </Button>

      <FlatList
        data={plantas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default ScreenRiego;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  card: {
    marginBottom: 20,
    backgroundColor: "#FBFAD3",
    borderRadius: 8,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  Button: {
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  ButtonAcciones:{
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  }
});
