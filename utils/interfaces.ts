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
  assigments?: IAssigments[];
}
export interface IAssigments {
  title: string;
  description: string;
  startDay: string;
  endDay: string;
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
export interface UserContextProps {
  user: IUser | null;
  loading: boolean;
}
