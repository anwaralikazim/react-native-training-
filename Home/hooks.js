import React, { useState } from "react"; // Import React for JSX usage and remove the duplicate useState import
import { View, Text, Button, StyleSheet } from "react-native";

const Hooks = () => {
    return (
        <View style={styles.box}>
            <Text style={styles.txt}>
                Hooks
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        height: 400,
        width: 500,
        backgroundColor: "red"
    },
    txt: {
        textAlign: "center",
        fontSize: 40
    }
});

export default Hooks;

