import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Post = ({ navigation }) => {
  const [joke, setJoke] = useState('');

  const handlePost = () => {
    if (joke.trim() !== '') {
      // Pass the new joke back to the Feed screen
      navigation.navigate('Feed', { newJoke: joke });
      // Clear the input field
      setJoke('');
    }
  };

  return (
    <View className="flex-1 justify-center items-center px-4 py-2">
      <TextInput
        className="w-full p-2 mb-4 border rounded"
        placeholder="Enter your joke"
        onChangeText={(text) => setJoke(text)}
        value={joke}
      />
      <Button title="Post" onPress={handlePost} />
    </View>
  );
};

export default Post;
