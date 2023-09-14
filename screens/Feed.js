import React from 'react';
import { View, Text, FlatList } from 'react-native';

const Feed = ({ jokes }) => {
  const renderJokeItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <FlatList
      data={jokes}
      renderItem={renderJokeItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Feed;
