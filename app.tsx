import { StyleSheet, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '@pages/home';
import Courses from '@pages/courses';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Calendar from '@pages/calendar';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerTitleAlign: 'center',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Courses"
          component={Courses}
          options={{
            title: 'Courses',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="easel-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Calendar"
          component={Calendar}
          options={{
            title: 'Calendar',
            drawerItemStyle: {
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            },
            drawerIcon: ({ color, size }) => (
              <Ionicons name="calendar-outline" size={size} color="#722f37" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
