import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CourseData, Teacher } from './interfaces';

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
