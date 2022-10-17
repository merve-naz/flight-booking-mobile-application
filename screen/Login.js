
import axios from 'axios';
import React,{useState,useContext} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput
} from 'react-native';
import  {useAuth} from "../context/AuthContext";


const SignIn=({navigation})=>{
   
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
 
   
    const [user,setUser]=useAuth();

    const handleLogin=()=>{
       axios({
        method:"POST",
        url:"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword",
        params:{
            key: "AIzaSyAgYP2ZjGJcoPN7l2qY0TKFQyZKwiLCmF0",
          },
        data:{
            email,
            password,
        },
       }).then(res=>{
        setUser(res.data);
        console.log(res.data)
       }) .catch(e=>{
        console.log("hata3");
       })
    }
    return(
        <View style={styles.viewStyles}>
        <View style={styles.wrapper}>
    
        <TextInput placeholder="Email" style={styles.input} 
        value={email} onChangeText={(text)=>setEmail(text)}></TextInput>

        <TextInput placeholder="Password" style={styles.input}
        value={password} onChangeText={(text)=>setPassword(text)}></TextInput>

        <Button title="Login" onPress={()=>handleLogin} style={styles.viewStyles}></Button>
        <View style={{flexDirection:'row',marginTop:20}}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
            <Text style={styles.link}>Register</Text>
        </TouchableOpacity>

       </View>
    </View>
    </View>
    
)
}
const styles = StyleSheet.create({
viewStyles: { flex:1,alignItems:'center', justifyContent:'center'},
wrapper:{
    width:'80%'
},
input:{
    marginBottom:12,
    borderWidth:1,
    borderColor:'#bbb',
    borderRadius:5,
    paddingHorizontal:14,
},
link:{
 color:'blue',
}

});
    


export default SignIn;