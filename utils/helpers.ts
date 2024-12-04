import { createStackNavigator } from '@react-navigation/stack';
import { IThemeContext, UserContextProps } from './interfaces';
import { LightTheme } from '@constants/theme';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createContext } from 'react';
import { AuthStackParameters, screensParameters } from './types';

export const Drawer = createDrawerNavigator<screensParameters>();

export const ThemeContext = createContext<IThemeContext>({
  theme: LightTheme,
  toggleTheme() {},
});

export const AuthStack = createStackNavigator<AuthStackParameters>();

export const UserContext = createContext<UserContextProps>({
  user: null,
  loading: true,
});
