import { StyleSheet, Text, View, TextInput,Button,Alert } from 'react-native'
import React,{useState,} from 'react'
const Signupscreen=({navigation})=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handlesignup=()=>{
        if( email==='mohana'&&password==='priyav'){
            navigation.navigate('page1');
        }
        else{
            Alert.alert('Invalid credentials');
        }
    };
   
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Signup Form</Text>
            <TextInput style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            />
            <TextInput style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            />
            <Button title="Signup" onPress={handlesignup}/>
        </View>
    );
};

const styles = StyleSheet.create ({
    container:{
        justifyContent:'center',
        padding:2,
    },
    title:{
        fontSize:10,
        marginBottom:100,
        textAlign:'center'
    },
    
    input:{
         borderWidth:1,
         marginBottom:10,
         padding:15,
         borderRadius:7,
    },
});
export default Signupscreen;

    



            