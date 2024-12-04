import Home from '@pages/home';
import Welcome from '@pages/welcome';
import { AuthStack, Drawer } from '@utils/helpers';
import { Ionicons } from '@expo/vector-icons';
import Calendar from '@pages/calendar';
import CourseInfo from '@pages/courseInfo';
import Courses from '@pages/courses';
import Profile from '@pages/profile';

export const AppStack = () => {
  return (
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
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerItemStyle: { display: 'none' },
          title: 'Perfil',
        }}
      />
    </Drawer.Navigator>
  );
};

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="Welcome">
      <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerTitleAlign: 'center', title: 'Bienvenido' }}
      />
    </AuthStack.Navigator>
  );
};
