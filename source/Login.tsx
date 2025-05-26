import { StyleSheet, Text, View, TextInput,Button } from 'react-native'
import React,{useState,} from 'react'

export default function Login(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    return(
        <View style={styles.container}>
            <View style={styles.form}>
            <Text style={{fontSize:20,
                color:'black',
                paddingBottom:30,
            }}> Welcome to LoginPage</Text>
            <Text style={styles.label}>Username</Text>
            <TextInput style={styles.input} placeholder="Enter Username" value={username}
            onChangeText={setUsername}/>
            <Text style={styles.label}>Password</Text>
            <TextInput
               style={styles.input}
               placeholder="Enter Password"
               secureTextEntry
               value={password}
               onChangeText={setPassword}/>
               <Button title="login" onPress={() =>{}}/>
            </View>
            </View>
    );
};

const styles = StyleSheet.create ({
    container:{
        justifyContent:'center',
        paddingHorizontal:20,
        backgroundColor:'white',
        marginHorizontal:25,
        marginVertical:100,
    },
    form:{
        justifyContent:'center',
        backgroundColor:'white',
        padding:30,
        borderRadius:30,
        shadowColor:"grey",
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:5,
        elevation:5,
    },
    label:{
         justifyContent:'center',
         fontSize:16,
         marginBottom:5,
         fontWeight:"bold",
    },
    input:{
         height:40,
         borderColor:"black",
         borderWidth:1,
         marginBottom:15,
         padding:10,
    }
})

    



            