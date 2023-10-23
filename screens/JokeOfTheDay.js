import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

const jokes = [
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What do you get when you cross a snowman and a vampire? Frostbite!",
  "How does a penguin build its house? Igloos it together!",
  "Why was the math book sad? Because it had too many problems!",
  "I'm on a seafood diet. I see food, and I eat it!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "I used to play piano by ear, but now I use my hands.",
  "I'm reading a book on anti-gravity. It's impossible to put down.",
  "I used to be a baker, but I couldn't make enough dough.",
  "The baker couldn't make enough bread, so he got a new knead assistant.",
  "What did the big flower say to the little flower? 'Hi, bud!'",
  "I'm friends with all electricians because we have good current connections.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "I couldn't figure out how to put my seatbelt on. Then it 'clicked.'",
  "Why did the bicycle fall over? Because it was two-tired!",
  "Why did the computer keep freezing? It left its Windows open!",
  "I'm a fungi, but I'm not a mushroom. I'm a fun guy!",
  "I'm friends with all gardeners because I'm down to earth.",
];


const JokeOfTheDay = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const navigation = useNavigation();

  const handleSeeMore = () => {
    // Navigate to the Categories screen
    navigation.navigate('Category');
  };
  return (
    <View className="flex-1 justify-center items-center px-4 py-2 m-3">
        <Text className="w-[350] h-auto min-h-[150px] p-auto mx-4 bg-purple-300 rounded-lg p-4 text-2xl ">
        {jokes[randomIndex]}
        </Text>

        <TouchableOpacity onPress={handleSeeMore} className="m-4 bg-purple-700 p-3 rounded-3xl ">
          <Text className='text-white text-base font-semibold'>See More</Text>
        </TouchableOpacity> 


    </View>
  );
};

export default JokeOfTheDay;
