import React from 'react'
import { View, Text, TouchableOpacity, Button, image, ImageBackground, StyleSheet } from 'react-native';

 

const imagen = { uri: "https://reactjs.org/logo-og.png" };


const Home = ({ navigation }) => {
    return (
        <ImageBackground source={imagen} resizeMode="cover" style={styles.image}>
            
            
            <Text style={styles.text}> Bienvenido a React Native </Text>
            

                <Button  title='Acceder'
                    onPress = { () =>
                    navigation.navigate('Login')}
                />

            
        </ImageBackground>     
    )       
    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
  });





export default Home;