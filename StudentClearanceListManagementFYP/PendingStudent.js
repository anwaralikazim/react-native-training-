import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const students = [
  { id: '1', name: 'Haseeb', date: '7/10/2024', discipline: 'Bs CS', status: 'View' },
  { id: '2', name: 'Faraz', date: '17/10/2024', discipline: 'Bs IT', status: 'View' },
  { id: '3', name: 'Anwar', date: '19/10/2024', discipline: 'Bs IT', status: 'View' },
  { id: '4', name: 'Suhail', date: '18/10/2024', discipline: 'Bs IT', status: 'View' },
  { id: '5', name: 'Nawaz', date: '15/10/2024', discipline: 'Bs cs', status: 'View' },
  { id: '6', name: 'Babar', date: '13/10/2024', discipline: 'Bs cs', status: 'View' },
  { id: '7', name: 'Mazhar', date: '14/10/2024', discipline: 'Bs Cs', status: 'View' },
  // Add more student data here
];

const PendingStudent = () => {
  const [search, setSearch] = useState('');
  const [filteredStudents, setFilteredStudents] = useState(students);

  const handleSearch = (text) => {
    setSearch(text);
    setFilteredStudents(students.filter(student =>
      student.name.toLowerCase().includes(text.toLowerCase())
    ));
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.discipline}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{item.status}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
     <Text style={styles.header}>Pending Students</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Students"
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredStudents}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:"lightgreen"
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  header:{
    height:40,
    fontSize:20,
    alignContent:"center",
    color:"Black",
    fontStyle:"bold"
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
  },
});

export default PendingStudent;
