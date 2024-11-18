import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity,Button } from 'react-native';

const LabRecord= () => {
    const [damageReportChecked, setDamageReportChecked] = useState(false);
  

   

    const renderCheckbox = (checked, onPress, label) => (
        <View style={styles.checkboxContainer}>
            <TouchableOpacity onPress={onPress} style={styles.checkbox}>
                {checked && <View style={styles.checkedBox} />}
            </TouchableOpacity>
            <Text>{label}</Text>
        </View>
    );
    const handleSubmit = () => {
        if (problem.trim()) {
            Alert.alert('Problem Statement', problem);
          } else {
            Alert.alert('No Problem Provided', 'Please enter a problem statement.');
          }
      };
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Lab Records</Text>

            <View style={styles.recordItem}>
                <Text style={styles.label}>Student:</Text>
                <Text style={styles.value}>Anwar Ali</Text>
            </View>

            <View style={styles.recordItem}>
                <Text style={styles.label}>Arid No:</Text>
                <Text style={styles.value}>2021-Arid-0159</Text>
            </View>

            <View style={styles.recordItem}>
                
                <Switch value={damageReportChecked} onValueChange={setDamageReportChecked} />
                <Text style={styles.value}>{damageReportChecked ? 'Cleared' : 'Not Cleared'}</Text>
            </View>

            

                 <Button title="Submit" onPress={handleSubmit} />

        </View>
    );
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
        color: '#4A90E2',
    },
    recordItem: {
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    value: {
        fontSize: 16,
        color: '#333',
        marginTop: 5,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#333',
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkedBox: {
        width: 14,
        height: 14,
        backgroundColor: '#4A90E2',
    },
});

export default LabRecord;
