import React from "react";
import { TouchableOpacity, Text } from 'react-native';

const MyTouchableOpacity = () => {
    return (
        <TouchableOpacity 
            style={{ 
                width: '50%', 
                backgroundColor: '#833AB4', 
                borderRadius: 100, 
                alignItems: 'center', 
                justifyContent: 'center', 
                padding: 10
            }}
        >
            <Text style={{ 
                textAlign: 'center', 
                fontSize: 22, 
                fontWeight: '500', 
                color: 'white' 
            }}>
                Sign in
            </Text>
        </TouchableOpacity>
    );
};

export default MyTouchableOpacity; // Ensure no invocation here!
