import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MyComponent from './MyComponent';
import Cart from './Cart'; // Ensure this path is correct

const Stack = createStackNavigator();

const move = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="MyComponent">
      <Stack.Screen name="MyComponent" component={MyComponent} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default move;
