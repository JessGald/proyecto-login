import React from 'react'
import { View, StyleSheet } from 'react-native';
import MainStack from './navigation/MainStack'
 
import Home from './screens/Home'
 
 
function App() {
  return (
    <View style = {{ flex: 1}}>
 
        <MainStack />
 
    </View>
  )
}
 
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    flex: 1,
    justifyContent: 'center',
  }
});
 
export default App;

