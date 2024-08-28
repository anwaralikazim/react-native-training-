import React, { useState } from "react";
import { Text, Button, Image, View, StyleSheet } from "react-native";

const items = [
  { id: 1, name: 'item1', quantity: 1, price: '$10', image: 'https://via.placeholder.com/50' },
  { id: 2, name: 'item2', quantity: 1, price: '$20', image: 'https://via.placeholder.com/50' },
  { id: 3, name: 'item3', quantity: 1, price: '$30', image: 'https://via.placeholder.com/50' },
  { id: 4, name: 'item4', quantity: 1, price: '$40', image: 'https://via.placeholder.com/50' },
  { id: 5, name: 'item5', quantity: 1, price: '$50', image: 'https://via.placeholder.com/50' }
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(items);

  const addItem = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItem = (item) => {
    setCartItems(cartItems.filter(i => i.id !== item.id));
  };

  const increaseQuantity = (item) => {
    const newCartItems = cartItems.map(i => {
      if (i.id === item.id) {
        return { ...i, quantity: i.quantity + 1 };
      }
      return i;
    });
    setCartItems(newCartItems);
  };

  const decreaseQuantity = (item) => {
    const newCartItems = cartItems.map(i => {
      if (i.id === item.id && i.quantity > 1) {
        return { ...i, quantity: i.quantity - 1 };
      }
      return i;
    });
    setCartItems(newCartItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      {cartItems.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
          <View style={styles.quantityContainer}>
            <Button title="-" onPress={() => decreaseQuantity(item)} />
            <Text style={styles.quantity}>{item.quantity}</Text>
            <Button title="+" onPress={() => increaseQuantity(item)} />
          </View>
          <View style={styles.removeButton}>
            <Button title="Remove" onPress={() => removeItem(item)} />
          </View>
        </View>
      ))}
      <Button
        title="Add Item"
        onPress={() =>
          addItem({
            id: Math.random(),
            name: 'New Item',
            price: '$60',
            image: 'https://via.placeholder.com/50',
            quantity: 1,
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#cccccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
  removeButton: {
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});

export default ShoppingCart;
