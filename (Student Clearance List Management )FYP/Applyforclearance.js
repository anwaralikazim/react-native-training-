import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ClearanceScreen = () => {
  return (

  

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Name</Text>
       
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Apply For Clearance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Request</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Clearance List</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Issue in Clearance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 20,
    color: 'White',
    fontSize:30
  },
  overlay: {
    backgroundColor: 'green', // Optional: to add a semi-transparent overlay
    padding: 10,
    borderRadius: 10},
  profileIcon: {
    width: 40,
    height: 40,
    marginLeft: 10,
    tintColor: '#fff',
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 25,
    backgroundColor: 'yellow',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  logoutButton: {
    width: '50%',
    padding: 15,
    borderRadius: 25,
    backgroundColor: 'yellow',
    alignItems: 'center',
    marginTop: 40,
  },
});

export default ClearanceScreen;
