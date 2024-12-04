import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ICourse, ITeacher } from './interfaces';

export type screensParameters = {
  Home: undefined;
  Courses: undefined;
  Calendar: undefined;
  Course: { course: ICourse };
  Profile: undefined;
};
export type AuthStackParameters = {
  Welcome: undefined;
};
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
