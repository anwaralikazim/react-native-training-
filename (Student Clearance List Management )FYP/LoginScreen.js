
/*import { useState } from "react";
import { Text, TouchableOpacity, TextInput, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Button } from "react-native-paper";
 

const Stack = createNativeStackNavigator();
const LoginScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (

    {<NavigationContainer>
    <Stack.Navigator>
     
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
         <Stack.Screen name="ClearanceScreen" component={ClearanceScreen} /> 
      
      </Stack.Navigator>
      </NavigationContainer>}
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#666"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
        
        </TouchableOpacity>
      </View>

      <Button>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </Button>

      <View style={styles.buttonContainer}>
       <Button tittle='Login' onPress={()=>props.navigation.navigate(ClearanceScreen)}/>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4C4',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    elevation: 3,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    elevation: 3,
  },
  inputPassword: {
    flex: 1,
  },
  eyeIcon: {
    marginLeft: 10,
  },
  forgotText: {
    color: '#666',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    width: '45%',
    padding: 15,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default LoginScreen;
*/import { useState } from "react";
import { Text, TouchableOpacity, TextInput, StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from "react-native-paper";

const Stack = createNativeStackNavigator();

const LoginScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#666"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          {/* You can add an icon here for visibility toggle */}
        </TouchableOpacity>
      </View>

      <Button onPress={() => navigation.navigate('ClearanceScreen')}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </Button>

      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={() => navigation.navigate('ClearanceScreen')}>
          Login
        </Button>
      </View>
    </View>
  );
};

const ClearanceScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Clearance Screen</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ClearanceScreen" component={ClearanceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4C4',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    elevation: 3,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    elevation: 3,
  },
  inputPassword: {
    flex: 1,
  },
  eyeIcon: {
    marginLeft: 10,
  },
  forgotText: {
    color: '#666',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default App;

