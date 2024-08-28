import React, { useState } from 'react'; // No need to import useState if not used
import { View, Text,Button, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Hooks from './hooks'; // Make sure the file name is correct and exists

// Define or import BoxCom component
const BoxCom = ({ label, bgColor }) => (
  <View style={[styles.box, { backgroundColor: bgColor }]}>
    <Text style={styles.label}>{label}</Text>
  </View>
); 

const Home1 = () => {
  const [count, setcount]=useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (

    
    <ScrollView>
      <BoxCom label={"Box 1"} bgColor={"black"} />
      <BoxCom label={"Box 2"} bgColor={"yellow"} />
    
    <button onClick={handleClick}>
 <text> You pressed me {count} times</text>
  </button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  label: {
    fontSize: 20,
    color: 'white'
  }
});

export default Home1;


