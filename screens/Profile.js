import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [username, setUsername] = useState('johndoe');
  const [bio, setBio] = useState('A happy soul who loves to laugh!');

  const handleEditPress = () => {
    setEditing(!editing);
  };

  return (
    <View className="flex-1 p-4">
      <View className="items-center">
        <Image
          source={require('../assets/icon.png')}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      </View>

      {editing ? (
        <View className="mt-4">
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
            className="w-full p-2 border rounded-md mb-2"
          />
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            className="w-full p-2 border rounded-md mb-2"
          />
          <TextInput
            placeholder="Bio"
            value={bio}
            onChangeText={(text) => setBio(text)}
            multiline
            numberOfLines={4}
            className="w-full p-2 border rounded-md mb-4"
          />
          <TouchableOpacity
            onPress={handleEditPress}
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View className="mt-4">
          <Text className="text-xl font-semibold">{name}</Text>
          <Text className="text-gray-500">@{username}</Text>
          <Text className="mt-2">{bio}</Text>
          <TouchableOpacity
            onPress={handleEditPress}
            className="mt-4 bg-blue-500 text-white p-2 rounded-md"
          >
            <Text>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Profile;
