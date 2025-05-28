import React from "react";
import{View,Text,StyleSheet,TouchableOpacity}from 'react-native';
const dashboardscreen=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the Dashboard</Text>
            <TouchableOpacity>
                Go to
            </TouchableOpacity>
        </View>
    );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:20,
        fontWeight:'bold'    
    },
});
export default dashboardscreen;