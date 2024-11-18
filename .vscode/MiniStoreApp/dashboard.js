import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { SearchBar } from "react-native-elements";

const categories = [
  { id: "1", name: "Electronics" },
  { id: "2", name: "Clothing" },
  { id: "3", name: "Home & Kitchen" },
  { id: "4", name: "Books" },
  { id: "5", name: "Accessories" },
];

// Use direct URLs from Google or any other online source
const products = [
  { id: "1", name: "Smartphone", price: "$299" },
  { id: "2", name: "T-shirt", price: "$19" },
  { id: "3", name: "Blender", price: "$49"},
  { id: "4", name: "Fiction Book", price: "$12"},
  { id: "5", name: "Sunglasses", price: "$25"},
];

const Main = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (searchText) => {
    setSearch(searchText);
  };

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={style.categoryItem}>
      <Text style={style.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderProduct = ({ item }) => (
    <View style={style.productItem}>
      <Image source={{ uri: item.image }} style={style.productImage} />
      <Text style={style.productName}>{item.name}</Text>
      <Text style={style.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={style.container}>
      <Text style={style.title}>Welcome To Gilgit Baltistan App</Text>
      <SearchBar
        placeholder="What are you looking for?"
        onChangeText={updateSearch}
        value={search}
        containerStyle={style.searchContainer}
        inputContainerStyle={style.searchInput}
        placeholderTextColor="gray"
      />
      
      <Text style={style.sectionTitle}>Browse Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesList}
      />

      <Text style={style.sectionTitle}>Popular Products</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.productsList}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "black",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: "white",
    textAlign: "center",
  },
  searchContainer: {
    backgroundColor: "black",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  searchInput: {
    backgroundColor: "#333",
  },
  sectionTitle: {
    fontSize: 20,
    color: "white",
    paddingTop: 20,
    marginBottom: 10,
  },
  categoriesList: {
    paddingBottom: 10,
  },
  categoryItem: {
    backgroundColor: "#444",
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  categoryText: {
    color: "white",
  },
  productsList: {
    paddingBottom: 10,
  },
  productItem: {
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    alignItems: "center",
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 10,
  },
  productName: {
    color: "white",
    fontSize: 16,
  },
  productPrice: {
    color: "gray",
    fontSize: 14,
    marginTop: 5,
  },
});

export default Main;
