import React,{useState} from 'react';
import {View,TextInput,Button,Text,StyleSheet,} from 'react-native';
const Loginscreen=({navigation})=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');

    const handlelogin=()=>{
        if(username==='mona'&& password==='priyav'){
            navigation.navigate('page2');
        }else{
            setError('Invalid credentials');
        }
    };
   return(
      <View style={StyleSheet.container}>
        <TextInput
           placeholder="Username"
           value={username}
           onChangeText={setUsername}
           style={styles.input}
           />
           <TextInput
              placeholder="password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />
            {error?<Text style={styles.error}>{error}</Text>:null}
            <Button title="Login" onPress={handlelogin}/>
      </View>
   );
};
const styles=StyleSheet.create({
    container:{
        padding:20,
        marginTop:100,
    },
    input:{
        borderWidth:1,
        borderColor:'#999',
        borderRadius:5,
        marginBottom:15,
        padding:10,
    },
    error:{
        color:'red',
        marginBottom:10,
    },
});
export default Loginscreen;
