
import axios from 'axios';
import React,{useContext,useState} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

import {useAuth} from "../context/AuthContext";

const SignUp=({navigation})=>{
    
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    const [error,setError]=useState("");

    const [user,setUser]=useAuth();
        
    const handleRegister=()=>{
     
      axios({
        method:"POST",
        url:"https://identitytoolkit.googleapis.com/v1/accounts:signUp",
        params:{
          key: "AIzaSyAgYP2ZjGJcoPN7l2qY0TKFQyZKwiLCmF0",
        },
        data:{
          'email':email,
          'password':password,
        }
      })
      .then((res)=>{
      
        axios({
          method:"POST",
          url:"https://identitytoolkit.googleapis.com/v1/accounts:update",
          params:{
            key: "AIzaSyAgYP2ZjGJcoPN7l2qY0TKFQyZKwiLCmF0",
          },
          data:{
            idToken:res.data.idToken,
            displayName:name,

          }
        }).then(r=>{
          console.log(r.data,'update profile res');
          setUser({...r.data,idToken:res.data.idToken});
         
        }).catch(e=>{
          console.log(e,'update profile error');
          alert(e.message+"hata1");
        })
       
        console.log(res.data);
      })
      .catch((e)=>{
              console.warn(e);
              alert(e.message+"hata2");
      })

    };
    return(
        <View style={styles.viewStyles}>
        <View style={styles.wrapper}>
        
        <TextInput placeholder="Name" style={styles.input} 
        value={name} onChangeText={(text)=>setName(text)}></TextInput>

        <TextInput placeholder="Email" style={styles.input} 
        value={email} onChangeText={(text)=>setEmail(text)}></TextInput>

        <TextInput placeholder="Password" style={styles.input}
        value={password} onChangeText={(text)=>setPassword(text)}></TextInput>

        <Button title="Register" style={styles.viewStyles} onPress={handleRegister}
        ></Button>

        <View style={{flexDirection:'row',marginTop:20}}>
       
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
    


export default SignUp;