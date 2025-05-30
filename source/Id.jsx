import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
const IdScreen = ({}) =>{
  return (
    <View style={styles.container}>
                  <Image source={require('./asset/idimg.jpg')} style={styles.Image}/>
                   <Text style={styles.text}>NAME:      MOHANAPRIYA V</Text>
          <Text style={styles.text}>ROLL NO:      23CS012</Text>
                   <Text style={styles.text}>COURSE:    B.Sc(CS)</Text>
                  <Text style={styles.text}>VALIDITY:   30.5.2026</Text>
                  <Text style={styles.text}>ADDRESS:  2,BYEPASS ROAD,KAVINDAPADI</Text>
                  <Text style={styles.text}>PHONE NUMBER:     6758354623</Text>
                  <Text style={styles.text}>D.O.B:      14.11.2006</Text>
                  <Text style={styles.text}>AADHAAR:   74848576734</Text>
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image:{
    alignItems:'center',
    width:250,
    height:250,
    borderRadius:10,
    marginBottom:10,
  },
  text: {
    fontSize: 20,
    justifyContent:'center',
    color: 'blue',
  },
});

export default IdScreen;
