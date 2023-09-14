import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import BottomNav from '../components/BottomNav';

const jokes = [
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What do you get when you cross a snowman and a vampire? Frostbite!",
  "How does a penguin build its house? Igloos it together!",
  // Add more jokes here
];

const JokeOfTheDay = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
  return (
    <View className="flex-1 justify-center items-center px-4 py-2 m-3">
      <Text className="text-xl text-center mb-5">{jokes[randomIndex]}</Text>
    </View>
  );
};

export default JokeOfTheDay;
