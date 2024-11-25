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
  //TODO: definir campos a analizar, tal vez profesorID? o profesor como objeto?
}
export interface Teacher {
  id: string;
  name: string;
  lastName: string;
}
