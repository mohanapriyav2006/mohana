import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Picture from './asset/idimg.jpg';

const image = () => {
    return (
        <View>
            <Image
            source={Picture}
            style={{width:400,height:200,padding:200}}
            />
            {/* <Image
             source={{https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2F719590846709820992%2F&psig=AOvVaw0D8ICeg1jr4GWn_R1hcDq7&ust=1748595992405000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPD9k-qpyI0DFQAAAAAdAAAAABAE}}}
             style={{width:100,height:100}}
             /> */}
             <Image
               source={require('./asset/idimg.jpg')}
               style={{width:100,height:100}}
               />
             </View>
    );
};
export default image;
