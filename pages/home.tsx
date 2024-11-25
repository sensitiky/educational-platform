import { View, FlatList, Text, StyleSheet } from 'react-native';
import UserCard from '@components/userCard';
import CourseCard from '@components/coursesCard';
import { CourseData, Teacher } from '@utils/interfaces';

export default function Home() {
  //mock data
  const teacher: Teacher[] = [{ id: '1', name: 'John', lastName: 'Doe' }];
  const courses: CourseData[] = [
    {
      id: '1',
      title: 'Matemáticas',
      description: '1° TSAS 2024',
      teacher: teacher,
    },
    {
      id: '2',
      title: 'Programación 1',
      description: '1° TSAS 2024',
      teacher: teacher,
    },
    {
      id: '3',
      title: 'Lógica',
      description: '1° TSAS 2024',
      teacher: teacher,
    },
    {
      id: '4',
      title: 'Sistema Operativo',
      description: '1° TSAS 2024',
      teacher: teacher,
    },
    {
      id: '5',
      title: 'Estructura de Datos',
      description: '1° TSAS 2024',
      teacher: teacher,
    },
  ];
  return (
    <View style={styles.container}>
      <UserCard userID="1" title="Bienvenido Mario Correa" />
      <Text style={styles.text}>Materias del día</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item: course }) => (
          <CourseCard userID="1" courseID={course.id} courseInfo={course} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
  },
});
