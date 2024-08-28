import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const Counter1 = () => {
  let [second, setSecond] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [hours, setHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond(prevSecond => {
        if (prevSecond === 59) {
          setMinutes(prevMinutes => {
            if (prevMinutes === 59) {
              setHours(prevHours => prevHours + 1);
              return 0;
            }
            return prevMinutes + 1;
          });
          return 0;
        }
        return prevSecond + 1;
      });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.main}>
      <View style={styles.control}>
        <Text style={styles.txt}>
          {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(second).padStart(2, '0')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 600,
    width: 400,
    backgroundColor: "yellow",
    justifyContent: "center", // Center the content vertically
    alignItems: "center" // Center the content horizontally
  },
  txt: {
    color: "red",
    fontSize: 30,
    textAlign: "center"
  },
  control: {
    // Add any additional styling needed for the control container
  }
});

export default Counter1;
