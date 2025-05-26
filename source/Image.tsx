import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Picture from './asset/flower.webp';

const image = () => {
    return (
        <View>
            <Image
            source={Picture}
            style={{width:400,height:200,padding:200}}
            />
            {/* <Image
             source={{https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.1800flowers.com%2Farticles%2Fflower-facts%2Fmost-beautiful-flowers&psig=AOvVaw0MgFQZJ6F0urqsmYUNIZOW&ust=1748065254274000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCZrNXwuI0DFQAAAAAdAAAAABAE}}}
             style={{width:100,height:100}}
             /> */}
             <Image
               source={require('./asset/flower.webp')}
               style={{width:100,height:100}}
               />
             </View>
    );
};
export default image;
