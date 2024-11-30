import { NavigationContainer } from '@react-navigation/native';
import Home from '@pages/home';
import Courses from '@pages/courses';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Calendar from '@pages/calendar';
import CourseInfo from '@pages/courseInfo';
import Welcome from '@pages/welcome';
import { DarkTheme, LightTheme } from '@constants/theme';
import { ThemeContext, Drawer } from '@utils/helpers';
import './global.css';

export default function App() {
  const [theme, setTheme] = useState<typeof LightTheme | typeof DarkTheme>(
    LightTheme
  );

  /*useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setTheme(DarkTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme?.mode === 'light' ? DarkTheme : LightTheme;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme.mode);
  };*/

  return (
    //<ThemeContext.Provider value={{ theme, toggleTheme }}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Welcome">
        <Drawer.Screen
          name="Welcome"
          component={Welcome}
          options={{
            drawerItemStyle: { display: 'none' },
          }}
        />
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
    //</ThemeContext.Provider>
  );
}
