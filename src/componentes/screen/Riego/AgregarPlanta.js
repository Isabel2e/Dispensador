import { StyleSheet, Text, View, TextInput, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import FirebaseConfig from "../../../FirebaseConfig";
import { Button } from "react-native-paper";
import { getDatabase, ref, push, set } from "firebase/database";
import { useNavigation } from "@react-navigation/native";

const AgregarPlanta = () => {
  const [nombre, setNombre] = useState("");
  const [humedadIdeal, setHumedadIdeal] = useState("");
  const [tCrecimiento, setTCrecimiento] = useState("");
  const [temperaturaIdeal, setTemperaturaIdeal] = useState("");
  const [tGerminacion, setTGerminacion] = useState("");
  const navigation = useNavigation();
 

  const guardarPlanta = async () => {
    if (nombre && humedadIdeal && tCrecimiento && temperaturaIdeal && tGerminacion) {
      const db = getDatabase(FirebaseConfig.app);
      const nuevaPlantaRef = push(ref(db, "Plantas"));

      try {
        await set(nuevaPlantaRef, {
          nombre,
          humedadIdeal: parseInt(humedadIdeal),
          tCrecimiento: parseInt(tCrecimiento),
          temperaturaIdeal: parseInt(temperaturaIdeal),
          tGerminacion: parseInt(tGerminacion),
        });

        Alert.alert("Planta guardada", "La planta ha sido guardada correctamente.", [
          { text: "OK", onPress: () => navigation.navigate("Agregar planta") }
        ]);
      } catch (error) {
        console.error("Error guardando planta:", error);
        Alert.alert("Error", "Hubo un error al guardar la planta.");
      }
    } else {
      Alert.alert("Campos incompletos", "Por favor, completa todos los campos.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      <Text style={styles.label}>Nombre de la planta</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Nombre"
      />

      <Text style={styles.label}>Humedad Ideal (%)</Text>
      <TextInput
        style={styles.input}
        value={humedadIdeal}
        onChangeText={setHumedadIdeal}
        keyboardType="numeric"
        placeholder="25"
      />

      <Text style={styles.label}>Temperatura Ideal (°C)</Text>
      <TextInput
        style={styles.input}
        value={temperaturaIdeal}
        onChangeText={setTemperaturaIdeal}
        keyboardType="numeric"
        placeholder="25"
      />
      <Text style={styles.label}>Tiempo de Crecimiento (días)</Text>
      <TextInput
        style={styles.input}
        value={tCrecimiento}
        onChangeText={setTCrecimiento}
        keyboardType="numeric"
        placeholder="90"
      />


      <Text style={styles.label}>Tiempo de Germinación (días)</Text>
      <TextInput
        style={styles.input}
        value={tGerminacion}
        onChangeText={setTGerminacion}
        keyboardType="numeric"
        placeholder="9"
      />

      <Button mode="contained" onPress={guardarPlanta} style={styles.button}>
        Guardar
      </Button>
    </ScrollView>
  );
};

export default AgregarPlanta;

const styles = StyleSheet.create({
  contenedor: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#729D39",
  },
});
