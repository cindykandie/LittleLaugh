import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const categories = require('../utils/categories.json'); // Import the categories JSON

const Category = ({ navigation }) => {
  const handleCategoryPress = (categoryId) => {
    navigation.navigate('Feed', { categoryId });
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCategoryPress(item.id)}>
      <ScrollView className="grid grid-cols-2 grid-auto-auto p-4">
        <View className="bg-white shadow border border-cyan-500 rounded p-2">
          <Text className="text-center text-lg">{item.name}</Text>
        </View>
      </ScrollView>
    </TouchableOpacity>
  );

  return (
    <View className="flex flex-col flex-wrap p-4">
      <Text className="text-left font-semibold text-2xl p-3">Your selection</Text>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Set the number of columns to 2
      />
    </View>
  );
};

export default Category;
