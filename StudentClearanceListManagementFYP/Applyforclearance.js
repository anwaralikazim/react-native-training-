import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ClearanceScreen = () => {
  const handleLogout = () => {
    // Handle logout functionality here
  };

  const handleApplyForClearance = () => {
    // Handle "Apply For Clearance" functionality here
  };

  const handleIssueInClearance = () => {
    // Handle "Issue in Clearance" functionality here
  };

  return (
    <View style={styles.container}>
      {/* Header with profile image */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Name</Text>
        <Image
          style={styles.profileIcon}
          source={{ uri: 'https://img.icons8.com/ios-filled/50/user-male-circle.png' }}
        />
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.button} onPress={handleApplyForClearance}>
        <Text style={styles.buttonText}>Apply For Clearance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleIssueInClearance}>
        <Text style={styles.buttonText}>Issue in Clearance</Text>
      </TouchableOpacity>

      {/* Logout button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0C4DE', // Light blue background
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    position: 'absolute',
    top: 50,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  button: {
    backgroundColor: '#F0F0F0', // Light gray button
    padding: 15,
    borderRadius: 30,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  logoutButton: {
    backgroundColor: '#dcdcdc',
    padding: 10,
    borderRadius: 20,
    marginTop: 40,
    width: '60%',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    color: '#000',
  },
});

export default ClearanceScreen;
