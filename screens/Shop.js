import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ImageBackground,
  Image,
  Button,
} from "react-native";

const imagen = { uri: "https://reactjs.org/logo-og.png" };
const Shop = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <ImageBackground source={imagen} resizeMode="cover" style={styles.imagen}>
      <View style={styles2.container}>
        <View style={styles2.container}>
          <Image
            style={styles2.tinyLogo}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
        </View>
        <Button title="Articulo.1" onPress={onPress} />

        <View style={styles2.container}>
          <Image
            style={styles2.tinyLogo}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
        </View>
        <Button title="Articulo.2" onPress={onPress} />

        <View style={styles2.container}>
          <Image
            style={styles2.tinyLogo}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
        </View>

        <Button title="Articulo.3" onPress={onPress} />
        <View style={styles.countContainer}>
          <Text style={styles.countText}>{count || null}</Text>
        </View>

        <Button
          title="Volver a Login"
          onPress={() => navigation.navigate("Login")}
        />
        <Text> --- </Text>
        <Button
          title="Volver a Profile"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  countText: {
    color: "#FF00FF",
  },
  imagen: {
    flex: 1,
    justifyContent: "center",
  },
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  tinyLogo: {
    width: 200,
    height: 200,
  },
  logo: {
    width: 66,
    height: 58,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 70,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
});

export default Shop;
