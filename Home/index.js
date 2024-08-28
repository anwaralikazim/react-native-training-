import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

const Home = () => {
    return (
        <ImageBackground
            source={require('./window.jpg')} // Replace with your image path
            style={styles.background}
        >
            <View style={styles.overlay}>
                <Text style={styles.text}>
                     Home Window
                </Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
       // justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover', // Optional: to cover the entire screen
        height:790,
        width:395
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: to add a semi-transparent overlay
        padding: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 24,
        color: 'white',
    },
});

export default Home;
