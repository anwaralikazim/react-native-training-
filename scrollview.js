import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const menuItemsToDisplay = ["Biryani \n Karahi \n Haleem \n Nehari \n Beeb \n Fish\nBiryani \n Karahi \n Haleem \n Nehari \n Beeb \n Fish\nBiryani \n Karahi \n Haleem \n Nehari \n Beeb \n Fish\nBiryani \n Karahi \n Haleem \n Nehari \n Beeb \n Fish\nBiryani \n Karahi \n Haleem \n Nehari \n Beeb \n Fish"];

const MenuItems = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'green' }}> 
            <ScrollView style={{ padding: 40 }}>
                <Text style={{ fontSize: 40, flexWrap: 'wrap', color: 'white' }}>View Menu</Text>
                <Text style={{ fontSize: 30, color: 'red' }}>{menuItemsToDisplay[0]}</Text>
            </ScrollView>
        </View>
    );
};

export default MenuItems;
