import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native";
//import { useState } from 'react/cjs/react.production.min';
import React, { useState } from "react";

const imagen = { uri: "https://reactjs.org/logo-og.png" };

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      source={imagen}
      resizeMode="cover"
      style={styles.container}
    >
      <Image
        style={{ width: 200, height: 200 }}
        source={{
          uri: "https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/master/images/react-native-logo.png",
        }}
      />

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Contraseña..."
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot}>Contraseña o usuario olvidado</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.loginText}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Ver contraseña</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate("Profile", {
            nombre: email,
          });
        }}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate("Shop", {
            nombre: email,
          });
        }}
      >
        <Text style={styles.loginText}>SHOP</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0FA578",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },

  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },

  inputText: {
    height: 50,
    color: "white",
  },

  forgot: {
    color: "white",
    fontSize: 11,
  },

  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },

  loginText: {
    color: "white",
  },

  textseparator: {
    color: "#0FA578",
  },

  titulo: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  imagen: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Login;
