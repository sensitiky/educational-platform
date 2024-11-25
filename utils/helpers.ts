import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CourseData } from './interfaces';

export const mockData = [
  {
    title: 'Introducción a React Native',
    description:
      'Aprende los fundamentos de React Native para desarrollar aplicaciones móviles.',
  },
  {
    title: 'Introducción a Kotlin',
    description:
      'Aprende los fundamentos de React Native para desarrollar aplicaciones móviles.',
  },
  {
    title: 'Introducción a Flutter',
    description:
      'Aprende los fundamentos de React Native para desarrollar aplicaciones móviles.',
  },
];
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
