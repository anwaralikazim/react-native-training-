import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet,Alert } from 'react-native';


    const Canteen=()=>{
    const [isCleared, setIsCleared] = useState(false);
    const [isok, setIsok] = useState(false);
    const [problem, setProblem] = useState('');
    const handleSubmit = () => {
        if (problem.trim()) {
            Alert.alert('Problem Statement', problem);
          } else {
            Alert.alert('No Problem Provided', 'Please enter a problem statement.');
          }
      };
    

    return(
        <View style={styles.container}>
            <Text style={styles.header}>
                Canteen Records
            </Text>
        
            <View style={styles.recordItem}>
            <Text Style={styles.bold}>Student :</Text>
            <Text Style={styles.txt}>Anwar Ali </Text>
            </View>
            <View  style={styles.recordItem}>
            <Text  Style={styles.bold}>Arid No :</Text>
            <Text style={styles.txt}>2021-Arid-0159 </Text>
            </View>
            <View style={styles.recordItem} >
            <Text Style={styles.bold}>Remaining Balance: </Text>
            <Text Style={styles.txt}>RS 0 </Text>
            </View>
           <View style={styles.recordItem} >
            <Text Style={styles.bold}>Clearance Status :</Text>
            <Switch value={isCleared} onValueChange={setIsok} />
        <Text style={styles.txt}>{isok ? 'Cleared on Time' : 'Not Cleared'}</Text>
            

           </View>
           <View style={styles.recordItem} >
           <Text Style={styles.bold}>Items Not Paid For : </Text>
            <Text Style={styles.txt}> Tea , Coffee etc </Text>
            </View>
            <Switch value={isCleared} onValueChange={setIsCleared} />
            <Text style={styles.value}>{isCleared ? 'Student is Cleared' : 'Pending'}</Text>
            <View style={styles.recordItem}>
        <Text style={styles.bold}>Problem:</Text>
        <TextInput 
          style={styles.textInput}
          value={problem}
          onChangeText={setProblem}
          placeholder="Describe any problem here"
        />
      </View>

      <Button title="Submit" onPress={handleSubmit} />
    </View>
    
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: 'lightgreen',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: 'Red',
    },
    recordItem: {
      marginVertical: 10,
      fontWeight:"bold"
    },
    bold: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
    },
    txt: {
      fontSize: 16,
      color: '#333',
      marginTop: 5,
    },
    textInput: {
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
    },
  });
  
  export default Canteen;
  