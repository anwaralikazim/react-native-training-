import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { useNavigation } from '@react-navigation/native';

const MyComponent = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Set a timeout to hide the splash screen after 3 seconds
    setTimeout(() => {
      SplashScreen.hide(); // Hide the splash screen
      navigation.navigate('Cart'); // Navigate to the 'Cart' screen
    }, 3000); // 3000 milliseconds = 3 seconds
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to My App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MyComponent;
