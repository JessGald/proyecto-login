/*import React from 'react'
import { View, Text, Button,  StyleSheet, TextInput,TouchableOpacity,} from 'react-native'


const Profile = ({ navigation, route }) => {
 
   const {nombre} = route.params
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   

    return (
        <View style={styles.container}>

    
            <Text style={styles.text}>Bienvenido {nombre}</Text>
    
            <Text style={text1.container}>Tus datos son : {nombre}</Text>


            <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="       Email/Usuario"
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
   
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="        Contraseña"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
           
           

           <TouchableOpacity
               style = {styles.submitButton}
               >
               <Text style = {styles.submitButtonText}> Guardar </Text>
               
            </TouchableOpacity>
        </View>


            
                
            
        
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#00ced1",
  },
});


  const styles1 = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },

    input:{
      margin: 15,
      height: 40,
      borderColor: '#F8F8FA',
      borderWidth: 1

    }
   
  });

  const text1 = StyleSheet.create({
    container:{
      color: "black",
      fontWeight: "bold",
      fontSize: 20
    }
    



  })
  
 


export default Profile;*/

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Alert,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };

const Profile = ({ navigation, route }) => {
  const [number, onChangeNumber] = React.useState(null);
  const [apellido, onChangeApellidos] = React.useState(null);
  const [edad, onChangeEdad] = React.useState(null);

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={text1.input}> Imagen </Text>
      <Image
        style={styles2.tinyLogo}
        source={{
          uri: "https://geekazos.com/wp-content/uploads/2015/02/fb2.jpg",
        }}
      />
      <Text style={text1.input}> --- </Text>
      <Text style={text1.input}>INTRODUCE DATOS</Text>
      <Text style={text1.input}>Nombre</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="nombre"
        keyboardType="default"
      />

      <Text style={text1.input}>Apellidos</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeApellidos}
        value={apellido}
        placeholder="apellidos"
        keyboardType="default"
      />

      <Text style={text1.input}>Edad</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEdad}
        value={edad}
        placeholder="edad"
        keyboardType="numeric"
      />

      <Button title="Guardar" onPress={() => Alert.alert("Datos guardados")} />

      <Button
        title="Volver a Home"
        onPress={() => navigation.navigate("Home")}
      />

      <Button title="Ir a Tienda" onPress={() => navigation.navigate("Shop")} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#F8F9FA",
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
});

const styles2 = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  logo: {
    width: 120,
    height: 100,
  },
});

const text1 = StyleSheet.create({
  input: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Profile;
