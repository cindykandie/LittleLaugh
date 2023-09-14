import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const categories = require('../utils/categories.json'); // Import the categories JSON

const Category = ({ navigation }) => {
  const handleCategoryPress = (categoryId) => {
    navigation.navigate('Feed', { categoryId });
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCategoryPress(item.id)}>
      <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Category;

