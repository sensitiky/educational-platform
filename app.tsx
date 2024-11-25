import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '@pages/home';
import Courses from '@pages/courses';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Calendar from '@pages/calendar';
import CourseInfo from '@pages/courseInfo';
import { CourseData } from '@utils/interfaces';

type RootStackParamList = {
  Home: undefined;
  Courses: undefined;
  Calendar: undefined;
  Course: { course: CourseData };
};

const Drawer = createDrawerNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Inicio',
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
            title: 'Materias',
            drawerItemStyle: { display: 'none' },
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
        <Drawer.Screen
          name="Course"
          component={CourseInfo}
          options={{
            drawerItemStyle: { display: 'none' },
            title: '',
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
