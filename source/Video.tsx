import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';
const VideoPlayer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Play Local video</Text>
            <Video
             source={require('./asset/video.mp4')}
             style={styles.video}
             controls
             resizeMode="contain"
             paused={true}
        />
        <Video
             source={require('./asset/audio.mp3')}
             style={styles.video}
             controls
             resizeMode="contain"
             paused={true}
        />
        </View>
    );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems:'center',
        padding:16,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    video: {
        width: width - 32,
        height: (width - 32) * 0.5625,

    },

});
export default VideoPlayer;