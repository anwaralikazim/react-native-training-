import React, { useState } from "react";
import { Text, Button, View, StyleSheet, TextInput } from "react-native";

const Carrt = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [users, setUsers] = useState([]);

  const getUsersData = async () => {
    try {
      // Simulate fetching user data with a mock delay
      const mockUsersData = [
        { id: "1", name: "John Doe", age: 25, phone: "123-456-7890" },
        { id: "2", name: "Jane Smith", age: 30, phone: "987-654-3210" },
      ];
      
      // Mock async delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUsers(mockUsersData);
      
      console.log("Mock user data:", mockUsersData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 0, width: '100%', alignItems: 'center' }}>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          placeholderTextColor="black"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Age"
          placeholderTextColor="black"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Phone"
          placeholderTextColor="black"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <Text style={styles.heading}>Fetch Mock Users</Text>
        <Button title="Get Users Data" onPress={getUsersData} />

        {/* Display fetched user data */}
        <View style={{ marginTop: 20 }}>
          {users.map((user) => (
            <Text key={user.id}>
              {user.name} - Age: {user.age} - Phone: {user.phone}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Carrt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
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
