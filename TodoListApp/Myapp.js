import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import MyTouchableOpacity from './Component/Button'; // Your custom button

const Myapp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Email and password fields cannot be empty.');
      return;
    }

    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Success', `Welcome back, ${userCredential.user.email}!`);
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <View style={styles.mainCon}>
      <View style={{ marginTop: 0, width: '100%', alignItems: 'center' }}>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          placeholderTextColor="black"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="black"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Button to trigger login */}
        <MyTouchableOpacity onPress={handleLogin} />
      </View>
    </View>
  );
};

export default Myapp;

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    width: '80%',
    borderRadius: 10,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 15,
    color: 'black',
  },
});
