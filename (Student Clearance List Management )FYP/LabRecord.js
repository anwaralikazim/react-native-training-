import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';

const LibraryRecord = () => {
    const [damageReportChecked, setDamageReportChecked] = useState(false);
    const [monitorChecked, setMonitorChecked] = useState(false);
    const [cpuChecked, setCpuChecked] = useState(false);
    const [keyboardChecked, setKeyboardChecked] = useState(false);
    const [otherChecked, setOtherChecked] = useState(false);

    const renderCheckbox = (checked, onPress, label) => (
        <View style={styles.checkboxContainer}>
            <TouchableOpacity onPress={onPress} style={styles.checkbox}>
                {checked && <View style={styles.checkedBox} />}
            </TouchableOpacity>
            <Text>{label}</Text>
        </View>
    );

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
                <Text style={styles.label}>Damage Report:</Text>
                <Switch value={damageReportChecked} onValueChange={setDamageReportChecked} />
                <Text style={styles.value}>{damageReportChecked ? 'Cleared' : 'Not Cleared'}</Text>
            </View>

            <View style={styles.recordItem}>
                <Text style={styles.label}>Barrow Items:</Text>
                {renderCheckbox(monitorChecked, () => setMonitorChecked(!monitorChecked), "Monitor")}
                {renderCheckbox(cpuChecked, () => setCpuChecked(!cpuChecked), "CPU")}
                {renderCheckbox(keyboardChecked, () => setKeyboardChecked(!keyboardChecked), "Keyboard")}
                {renderCheckbox(otherChecked, () => setOtherChecked(!otherChecked), "Other")}
            </View>
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

export default LibraryRecord;
