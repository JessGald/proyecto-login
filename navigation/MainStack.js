import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
import Shop from "../screens/Shop";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Profile" component={Profile} />

        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Shop" component={Shop} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
