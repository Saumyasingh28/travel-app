/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: 'grey',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather
              name="home"
              size={28}
              style={{ color: color, marginTop: 2 }}
            />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather
              name="image"
              size={28}
              style={{ color: color, marginTop: 2 }}
            />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Post"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather
              name="map-pin"
              size={28}
              style={{ color: color, marginTop: 2 }}
            />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Notification"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather
              name="bell"
              size={28}
              style={{ color: color, marginTop: 2 }}
            />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather
              name="user"
              size={28}
              style={{ color: color, marginTop: 2 }}
            />
          ),
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigator;
