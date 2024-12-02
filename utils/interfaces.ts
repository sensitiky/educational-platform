import { LightTheme, DarkTheme } from '@constants/theme';

export interface IUser {
  id: string;
  name?: string;
  lastName?: string;
  role: string;
}
export interface ICourse {
  id: string;
  title: string;
  description: string;
  teacher: ITeacher[];
}
export interface ITeacher {
  id: string;
  name: string;
  lastName: string;
}
export interface IAuthenticationForm {
  changeTab: () => void;
}
export interface IThemeContext {
  theme: typeof LightTheme | typeof DarkTheme;
  toggleTheme: () => void;
}
