import { Button, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react';

export default function Counter(){
    const [count,setCount]=useState(0);
    const [decrement,setDecrement]=useState(10)
    return(
        <View style={styles.title}>
            <Text>Count:{count}</Text>
            <Button title="Increase" onPress={()=>setCount(count+1)}/>

            <Text>Decrement={decrement}</Text>
            <Button title="Decrement" onPress={()=>setDecrement(decrement-1)}/>
        </View>
    );
};

const styles = StyleSheet.create({
       title:{
        justifyContent:'center',
        alignItems:'center',
       },
})
            
    