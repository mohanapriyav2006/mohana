import React from 'react';
import {View,Text,StyleSheet,Image,} from 'react-native';
const Detail=({})=>{
   return(
          <View style={styles.container}>          
        <Text style={styles.text}>Address:    Byepass road,Kavindapadi</Text>
        <Text style={styles.text}>Phone number: 6675849383</Text>
        <Text style={styles.text}>D.O.B: 14.11.2006</Text>
        <Text style={styles.text}>Aadhaar number:56478393</Text>
          </View>
      );
  };
  const styles=StyleSheet.create({
      container:{
          
          flex:1,
          justifyContent:'center',
          alignItems:'center',

      },
      image:{
         alignItems:'top',
          width:150,
          height:150,
          borderRadius:100,
          marginBottom:30,
          margincolor:'orange',
      },
      text:{
          color:'brown',
          fontSize:20,
          fontWeight:'bold',    
      },
  });
      
export default Detail;
