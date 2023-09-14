import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JokeOfTheDay from './screens/JokeOfTheDay'; 
import Feed from './screens/Feed'; 
import { StatusBar, View } from 'react-native';
import BottomNav from './components/BottomNav';
import jokesData from './utils/jokes.json';
import Post from './screens/Post';
import Category from './screens/Category';

const Stack = createStackNavigator();

function Root() {
  return (
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen name="JokeOfTheDay" component={JokeOfTheDay} />
      <Stack.Screen name="Feed">
          {(props) => <Feed {...props} jokes={jokesData} />}
        </Stack.Screen>
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <View style={{ flex: 1 }}>
        <Root /> 
        <BottomNav />
      </View>
    </NavigationContainer>
  );
}
