import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
const categories = require('../utils/categories.json');

const Feed = ({ route, navigation }) => {
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
    <View className='pb-[120px]'>
      <Text className="text-center font-semibold text-xl p-3 underline">{selectedCategory.name}</Text>
      <ScrollView horizontal={false} >
        {selectedCategory.jokes.map((joke, index) => (
          <View
            key={index}
            style={{
              padding: 20,
              borderBottomWidth: 1,
              borderColor: '#ccc',
            }}
          >
            <Text className="w-[350] h-auto min-h-[150px] p-auto mx-4 bg-purple-300 rounded-lg p-4 text-2xl ">
              {joke}
            </Text>
          </View>
        ))}
      </ScrollView>
      
    </View>
  );
};

export default Feed;
