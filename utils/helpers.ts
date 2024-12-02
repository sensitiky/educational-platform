import { RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { ICourse, IThemeContext, ITeacher } from './interfaces';
import { LightTheme } from '@constants/theme';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createContext } from 'react';
import { AuthStackParameters, screensParameters } from './types';

export type RootStackParamList = {
  Home: undefined;
  Course: { course: ICourse };
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
  teachers: ITeacher[];
};
export const Drawer = createDrawerNavigator<screensParameters>();

export const ThemeContext = createContext<IThemeContext>({
  theme: LightTheme,
  toggleTheme() {},
});
export const AuthStack = createStackNavigator<AuthStackParameters>();
