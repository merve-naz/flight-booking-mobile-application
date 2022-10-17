import React,{useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
 
  View,
  Button
} from 'react-native';


import SignUp from './screen/Register';
import SignIn from './screen/Login';
import Home from './screen/home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthProvider,{useAuth} from "./context/AuthContext";


const Stack = createNativeStackNavigator();

const Navigator=()=>{
  const [user,setUser]=useAuth();
   if(!user){
  return (
    <Stack.Navigator>
    <Stack.Screen name="Login" component={SignIn} options={{headerShown:false}} />
  <Stack.Screen name="Register" component={SignUp} options={{headerShown:false}} />
 
  </Stack.Navigator>
   );
}

  return(
  
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
  </Stack.Navigator>
  );
  console.log("2 return user: "+user);
}
const App = ()=>{
  return(
  <NavigationContainer>
      <AuthProvider>
        <Navigator/>
      </AuthProvider>
    </NavigationContainer>
      );
}
export default App;