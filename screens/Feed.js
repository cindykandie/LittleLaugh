import React from 'react';
import { View, Text, FlatList } from 'react-native';
const categories = require('../utils/categories.json');

const Feed = ({ route }) => {
  let categoryId = route.params?.categoryId;

  // Generate a random category ID if one is not provided
  if (!categoryId) {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    categoryId = randomCategory.id;
  }

  // Filter jokes based on the selected category
  const selectedCategory = categories.find((category) => category.id === categoryId);

  const renderJokeItem = ({ item, index }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
      <Text>{item}</Text>
    </View>
  );

  if (!selectedCategory) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Category not found.</Text>
      </View>
    );
  }

  return (
    <>
    <Text className="text-center font-semibold text-xl p-3 underline decoration-red-500">{selectedCategory.name}</Text>
    <FlatList
      data={selectedCategory.jokes}
      renderItem={renderJokeItem}
      keyExtractor={(item, index) => index.toString()}
    />
    </>
    
  );
};

export default Feed;
