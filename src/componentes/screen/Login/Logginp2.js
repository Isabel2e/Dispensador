import { StyleSheet, View, Alert, Image } from "react-native";
import { Text, TextInput, Button, IconButton, PaperProvider } from "react-native-paper";
import React, { useState } from "react";
import FromnuevoUser from "./FromnuevoUser";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,initializeAuth, getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import FirebaseConfig from "../../../FirebaseConfig";
import { useNavigation } from "@react-navigation/native";

const Logginp2 = () => {
  const navigation = useNavigation();
  const auth =getAuth(FirebaseConfig.app)  
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const crearCuenta = () => {
    createUserWithEmailAndPassword(auth, user, password)
      .then((UserCredential) => {
        console.log('Cuenta creada');
        Alert.alert('Cuenta creada');
        const user = UserCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loggin = () => {
    signInWithEmailAndPassword(auth, user, password)
      .then((UserCredential) => {
        console.log('Cuenta creada');
        const user = UserCredential.user;
        Alert.alert('Bienvenido:', user.email);
        navigation.replace('Dash');
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ingresarUsuario = () => {
    if (user === '') {
      Alert.alert('El campo de usuario no debe de estar vacío');
    }
    if (password === '') {
      Alert.alert('El campo password no debe de estar vacío');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <PaperProvider>
      <View style={styles.contenedorPrincipal}>
        <Image
          style={styles.imagen}
          source={require('../../../../assets/image-Photoroom (1).png')} 
        />
        <Text style={{ textAlign: 'center', color: "#36622B" }} variant="headlineSmall">Bienvenido</Text>

        <View style={styles.contendorInput}>
          <TextInput
            label="Email"
            style={{ marginTop: 10, backgroundColor: "#FBFAD3" }}
            theme={{ colors: { primary: "#36622B", placeholder: "#729D39", text: "#000000" } }}
            placeholderTextColor="#729D39"
            onChangeText={setUser}
            keyboardType="text"
            value={user}
          />

          <TextInput
            style={{ marginTop: 10, backgroundColor: "#FBFAD3" }}
            theme={{ colors: { primary: "#36622B", placeholder: "#729D39", text: "#000000" } }}
            placeholderTextColor="#729D39"
            label="Password"
            onChangeText={setPassword}
            secureTextEntry={showPassword}
            keyboardType="numeric"
            value={password}
            right={<TextInput.Icon icon='eye' onPress={toggleShowPassword} />}
          />

          <Button theme={{ colors: { primary: '#729D39' } }} style={{ marginTop: 20, width: 200, marginLeft: 70 }} icon="login" mode="contained" onPress={loggin}>
            Ingresar
          </Button>
          <Button theme={{ colors: { primary: '#36622B' } }} style={{ marginTop: 20, width: 200, marginLeft: 70 }} icon="account-plus-outline" mode="contained" onPress={crearCuenta}>
            Crear Cuenta
          </Button>

          <FromnuevoUser
            user={user}
          
          />
        </View>
      </View>
    </PaperProvider>
  );
}

export default Logginp2;

const styles = StyleSheet.create({
  contenedorPrincipal: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#FBFAD3",
    padding: 20
  },
  contendorInput: {
    padding: 18,
  },
  imagen: {
    width: 225,
    height: 200,
    alignItems: "center",
    marginLeft: 62
  }
});
