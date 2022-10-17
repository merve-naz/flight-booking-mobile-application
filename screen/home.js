
import React,{useState} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';



import {TextInput,Button} from  'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {useAuth} from "../context/AuthContext";
import { NavigationContainer, TabActions } from '@react-navigation/native';

const Home=()=>{

    const [user]=useAuth();
    const Tab=createBottomTabNavigator();
    return(
       <NavigationContainer>
       <View style={styles.imageContainer}>
      <Text styles={styles.usernameStyles}> HOSGELDİN {user}</Text>
       </View>
       </NavigationContainer> 
    )
}
const styles=StyleSheet.create({
  imageContainer:{
    width:"100%",
    padding:16,  
    backgroundColor:"red",
  },
  usernameStyles:{
    fontSize:16,
    color:"red",
    marginBottom:16,
    alignItems:"center"
  }
})
export default Home;