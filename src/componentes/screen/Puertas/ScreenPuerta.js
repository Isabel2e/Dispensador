import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import FirebaseConfig from "../../../FirebaseConfig";
import { Button } from "react-native-paper";
import { getDatabase, ref, get, update, child } from "firebase/database";

const ScreenPuerta = () => {
  const [datos, setDatos] = React.useState(null);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const db = getDatabase(FirebaseConfig.app);
    const dbRef = ref(db);

    try {
      const snapshot = await get(child(dbRef, "Huerto"));
      if (snapshot.exists()) {
        const datosObtenidos = snapshot.val();
        console.log("Datos obtenidos:", datosObtenidos);
        setDatos(datosObtenidos); // Actualiza el estado con los datos obtenidos
      } else {
        console.log("No se encontraron datos");
      }
    } catch (error) {
      console.error("Error obteniendo datos:", error);
    }
  };

  // Función para cambiar los estados de true or false
  const cambiarestado = async (lugar, nuevoStatus) => {
    const db = getDatabase(FirebaseConfig.app);
    const referencia = ref(db, `Huerto/${lugar}`);

    try {
      await update(referencia, { status: nuevoStatus });
      console.log("Datos actualizados correctamente");
      obtenerDatos(); // Vuelve a obtener los datos para reflejar los cambios
    } catch (error) {
      console.error("Error actualizando datos:", error);
    }
  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.Card}>
        {datos ? (
          <>
            <Text>Planta 1: {String(datos.luz.sección1.status)}</Text>
            <Button
              style={styles.button}
              theme={{ colors: { primary: datos.BombaAgua.sección1.status === 1 ? "#729D39" : "#36622B" } }}
              icon={datos.luz.sección1.status === 1 ? "lightbulb-on" : "lightbulb-off"}
              mode={datos.luz.sección1.status === 1 ? "contained" : "outlined"}
              onPress={() =>
                cambiarestado("luz/sección1", datos.luz.sección1.status === 1 ? 0 : 1)
              }
            >
              Luz
            </Button>

            <Button
              style={styles.button}
              theme={{ colors: { primary: datos.BombaAgua.sección1.status === 1 ? "#729D39" : "#36622B" } }}
              icon={datos.BombaAgua.sección1.status === 1 ? "water" : "water-off"}
              mode={datos.BombaAgua.sección1.status === 1 ? "contained" : "outlined"}
              onPress={() =>
                cambiarestado("BombaAgua/sección1", datos.BombaAgua.sección1.status === 1 ? 0 : 1)
              }
            >
              Bomba de agua
            </Button>

            <Button
              style={styles.button}
              theme={{ colors: { primary: datos.BombaAgua.sección1.status === 1 ? "#729D39" : "#36622B" } }}
              icon={datos.Ventilador.sección1.status === 1 ? "fan" : "fan-off"}
              mode={datos.Ventilador.sección1.status === 1 ? "contained" : "outlined"}
              onPress={() =>
                cambiarestado("Ventilador/sección1", datos.Ventilador.sección1.status === 1 ? 0 : 1)
              }
            >
              Ventiladores
            </Button>
          </>
        ) : (
          <>
            <Text>Cargando datos, espere...</Text>
          </>
        )}
      </View>

      <View style={styles.Card}>
        {datos ? (
          <>
            <Text>Planta 2: {String(datos.luz.sección2.status)}</Text>
            <Button
              style={styles.button}
              theme={{ colors: { primary: datos.BombaAgua.sección2.status === 1 ? "#729D39" : "#36622B" } }}
              icon={datos.luz.sección2.status === 1 ? "lightbulb-on" : "lightbulb-off"}
              mode={datos.luz.sección2.status === 1 ? "contained" : "outlined"}
              onPress={() =>
                cambiarestado("luz/sección2", datos.luz.sección2.status === 1 ? 0 : 1)
              }
            >
              Luz
            </Button>

            <Button
              style={styles.button}
              theme={{ colors: { primary: datos.BombaAgua.sección2.status === 1 ? "#729D39" : "#36622B" } }}
              icon={datos.BombaAgua.sección2.status === 1 ? "water" : "water-off"}
              mode={datos.BombaAgua.sección2.status === 1 ? "contained" : "outlined"}
              onPress={() =>
                cambiarestado("BombaAgua/sección2", datos.BombaAgua.sección2.status === 1 ? 0 : 1)
              }
            >
              Bomba de agua
            </Button>

            <Button
              style={styles.button}
              theme={{ colors: { primary: datos.BombaAgua.sección2.status === 1 ? "#729D39" : "#36622B" } }}
              icon={datos.Ventilador.sección2.status === 1 ? "fan" : "fan-off"}
              mode={datos.Ventilador.sección2.status === 1 ? "contained" : "outlined"}
              onPress={() =>
                cambiarestado("Ventilador/sección2", datos.Ventilador.sección2.status === 1 ? 0 : 1)
              }
            >
              Ventiladores
            </Button>
          </>
        ) : (
          <>
            <Text>Cargando datos, espere...</Text>
          </>
        )}
      </View>
    </View>
  );
};

export default ScreenPuerta;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  button: {
    marginTop: 13,
    borderColor: "#36622B",
  },
  Card: {
    marginBottom: 25,
    padding: 25,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});
