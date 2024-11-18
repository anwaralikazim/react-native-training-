import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    ActivityIndicator, // Import ActivityIndicator
} from "react-native";

const Todolist = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
    const [loading, setLoading] = useState(false); // Add loading state

    const handleAddTask = () => {
        if (task) {
            setLoading(true); // Show loader
            setTimeout(() => { // Simulate an async operation
                if (editIndex !== -1) {
                    // Edit existing task
                    const updatedTasks = [...tasks];
                    updatedTasks[editIndex] = task;
                    setTasks(updatedTasks);
                    setEditIndex(-1);
                } else {
                    // Add new task
                    setTasks([...tasks, task]);
                }
                setTask("");
                setLoading(false); // Hide loader
            }, 1000); // Simulate 1 second delay
        }
    };

    const handleEditTask = (index) => {
        const taskToEdit = tasks[index];
        setTask(taskToEdit);
        setEditIndex(index);
    };

    const handleDeleteTask = (index) => {
        setLoading(true); // Show loader
        setTimeout(() => { // Simulate an async operation
            const updatedTasks = [...tasks];
            updatedTasks.splice(index, 1);
            setTasks(updatedTasks);
            setLoading(false); // Hide loader
        }, 500); // Simulate 0.5 second delay
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.task}>
            <Text style={styles.itemList}>{item}</Text>
            <View style={styles.taskButtons}>
                <TouchableOpacity onPress={() => handleEditTask(index)}>
                    <Text style={styles.editButton}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDeleteTask(index)}>
                    <Text style={styles.deleteButton}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome </Text>
            <Text style={styles.title}>ToDo App</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter task"
                value={task}
                onChangeText={(text) => setTask(text)}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={handleAddTask}
                disabled={loading} // Disable button while loading
            >
                <Text style={styles.addButtonText}>
                    {editIndex !== -1 ? "Update Task" : "Add Task"}
                </Text>
            </TouchableOpacity>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" /> // Show loader
            ) : (
                <FlatList
                    data={tasks}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    heading: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 7,
        color: "green",
    },
    input: {
        borderWidth: 3,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 18,
    },
    addButton: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    addButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
    },
    task: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
        fontSize: 18,
    },
    itemList: {
        fontSize: 19,
    },
    taskButtons: {
        flexDirection: "row",
    },
    editButton: {
        marginRight: 10,
        color: "green",
        fontWeight: "bold",
        fontSize: 18,
    },
    deleteButton: {
        color: "red",
        fontWeight: "bold",
        fontSize: 18,
    },
});

export default Todolist;
