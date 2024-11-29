import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CourseData, IThemeContext, Teacher } from './interfaces';
import { LightTheme } from '@constants/theme';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createContext } from 'react';
import { screensParameters } from './types';

export type RootStackParamList = {
  Home: undefined;
  Course: { course: CourseData };
};

export type CourseScreenRouteProp = RouteProp<RootStackParamList, 'Course'>;
export type CourseScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Course'
>;

export type Props = {
  route: CourseScreenRouteProp;
  navigation: CourseScreenNavigationProp;
};
export type FloatingFilterProps = {
  onValueChange: (teacherName: string | null) => void;
  teachers: Teacher[];
};
export const Drawer = createDrawerNavigator<screensParameters>();

export const ThemeContext = createContext<IThemeContext>({
  theme: LightTheme,
  toggleTheme() {},
});
