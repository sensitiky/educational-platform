export interface UserData {
  id: string;
  name: string;
  lastName: string;
  role: string;
}
export interface CourseData {
  id: string;
  title: string;
  description: string;
  teacher: Teacher[];
}
export interface Teacher {
  id: string;
  name: string;
  lastName: string;
}
export interface AuthenticationFormProps {
  changeTab: () => void;
}
