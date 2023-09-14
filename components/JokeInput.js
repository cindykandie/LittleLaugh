import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const JokeInput = ({ onPost }) => {
  const [joke, setJoke] = useState('');

  const handlePost = () => {
    if (joke.trim() !== '') {
      onPost(joke);
      setJoke('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your joke"
        onChangeText={(text) => setJoke(text)}
        value={joke}
      />
      <Button title="Post" onPress={handlePost} color="#800080" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f0f0f0', // Background color for the input area
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
  },
});

export default JokeInput;
